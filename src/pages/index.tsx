import React from 'react';
import styles from './index.less';
import Navbar from '../components/navbar'

import Carousel from '../components/list'
export default () => {
  const img_style = {
    display:'block',
    width: '100%',
    height: '400px'}
  return (
    <div >
      <Navbar/>
      <div className={styles.top}>
        <img style={img_style} src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
        <div className={styles.title}>
          <h1>If not now,when?</h1>
          <h1>If not me,who?</h1>
          <h3>此时此刻,非我莫属!</h3>
          <form action="#">
             <input type="text"/> <button>搜索</button>
         </form>
        </div>
      </div>
      < Carousel/>
     
    </div>
  );
}
