const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// 최적화할 이미지 디렉토리
const directories = [
  'src/assets',
  'src/assets/carousel',
  'src/assets/mainInfo',
  'src/assets/design',
]

// 이미지 최적화 함수
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return

  const webpPath = filePath.replace(/\.[^.]+$/, '.webp')
  const tempPath = filePath.replace(/\.[^.]+$/, '_temp.png')

  try {
    if (filePath.includes('carousel')) {
      // 캐러셀 이미지 처리
      // 1. 먼저 매우 작은 크기로 리사이징
      const image = sharp(filePath, {
        limitInputPixels: false, // 픽셀 제한 비활성화
      })

      await image
        .resize(1280, 720, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .toFile(tempPath)

      // 2. WebP로 변환 (적절한 품질로 조정)
      await sharp(tempPath, {
        limitInputPixels: false,
      })
        .webp({
          quality: 80,
          effort: 6, // 압축 수준 (0-6, 6이 가장 높은 압축)
        })
        .toFile(webpPath)

      // 임시 파일 삭제
      fs.unlinkSync(tempPath)
    } else {
      // 일반 이미지 최적화
      await sharp(filePath, {
        limitInputPixels: false,
      })
        .webp({
          quality: 80,
          effort: 6,
        })
        .toFile(webpPath)
    }

    console.log(`Optimized: ${filePath} -> ${webpPath}`)
  } catch (error) {
    // 에러 발생 시 임시 파일이 존재하면 삭제
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath)
    }
    console.error(`Error optimizing ${filePath}:`, error)
  }
}

// 디렉토리 순회 및 이미지 최적화
async function processDirectories() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue

    const files = fs.readdirSync(dir)
    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isFile()) {
        await optimizeImage(filePath)
      }
    }
  }
}

processDirectories().then(() => {
  console.log('Image optimization completed!')
})
