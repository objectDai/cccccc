import React from 'react';
import styles from '../carouselStyle/index.less';
export default () => {
    function clicks(e:any){
       e.target.setAttribute('class','clicked')
    }
  return (
    <div className={styles.header}>
     <a href="">
         <img  src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt=""/>
     </a>
     <i>|</i>
     <i>社招官网</i>
     <ul onClick={clicks}>
         <li><a href="#" className='clicks'>首页</a></li>
         <li><a href="#">社会招聘</a></li>
         <li><a href="#">校园招聘</a></li>
         <li><a href="#">了解阿里</a></li>
         <li><a href="#">个人中心</a></li>
     </ul>
    
    </div>
    
  );
}
