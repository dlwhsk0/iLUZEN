import React, { useEffect, useState } from 'react';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import styles from './Like.module.css';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { ModalState } from '../recoil/modal.js';
import { like } from '../api/like.js';

export default function Like({product, DetailedPage, search}) {
  const resetModal = useResetRecoilState(ModalState);
  const setModal = useSetRecoilState(ModalState);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [storedLikedProducts, setStoredLikedProducts] = useState([]);

  useEffect(() => {
    like({setLikeList:setStoredLikedProducts, name:'조회', data:null});
  }, []);

  useEffect(() => {
    console.log("8888")
    const newLikedProducts = new Set(likedProducts);
    console.log(newLikedProducts)
    storedLikedProducts?.map((product1) => {
      if(product.propId === product1.prop.propId){
          newLikedProducts.add(product1.prop.propId);
        }
      // else {
      //   newLikedProducts.delete(product1.prop.propId)
      //   console.log(newLikedProducts)
      // }  
    })
    setLikedProducts(newLikedProducts);
  }, [storedLikedProducts]);
    
  useEffect(() => {
    sessionStorage.setItem('likedProducts', JSON.stringify(Array.from(likedProducts)));
  }, [likedProducts]);

  const handleToggle = async (product) => {
    if (sessionStorage.getItem('authorization')) {
      console.log(likedProducts.has(product.propId))
      if (likedProducts.has(product.propId)) {
        for (let i = 0; i < storedLikedProducts.length; i++) {
          const prop = storedLikedProducts[i];
          if (prop.prop.propId === product.propId) {
            await like({setLikeList:setStoredLikedProducts, name: '삭제', data: prop.likesId });
            return;
          }
        }
      } else {
        await like({ setLikeList:setStoredLikedProducts, name: '등록', data: product.propId });
        return;
      }
    } else {
        { !sessionStorage.getItem('userStatus') &&
        setModal(
          {
            isOpen: true,
            modalType: 'alert',
            backDropHandle: true,
            props: {
            text:  'This feature is available after logging in.',
            modalHandler: () => {
              resetModal();
            },
            },
        }) }
      }
  }
   
  const isProductLiked = () => {
    return likedProducts.has(product.propId)
  };

  return (
    <span>
        <button className={DetailedPage ? (search ? styles.searchLike : styles.DetailedPageSteam) : styles.EnvironmentSteam} onClick={() => handleToggle(product)}>
          {isProductLiked() ? <VscHeartFilled className={styles.icon} /> : <VscHeart className={styles.icon} />}
        </button>
    </span>
  );
}
