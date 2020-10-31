import React,{useState} from 'react';
import styles from '../carouselStyle/index.less';
export default () => {
    let [top,setTop]=useState(10)
    
    let users=[
        {id:'本地生活-业务专员-北京',name:'北京',age:"15分钟前"},
        {id:'渠道经理-渠道经理',name:'江西',age:"2小时前"},
        {id:'蚂蚁集团-业务发展专员-华东区（支付宝）',name:'上海',age:"1分钟前"},
        {id:'阿里云智能事业群多端应用',name:'杭州',age:"3分钟前"},
        {id:'阿里文娱优酷-品牌传媒',name:'北京',age:"1小时前"},
        {id:'阿里集团景区业务专员（政府方向）-支付宝',name:'重庆',age:"10分钟前"},
        {id:'阿里影业-高级法务专员-电商平台',name:'杭州',age:"8分钟前"},
        {id:'本地生活-业务专员-北京',name:'北京',age:"15分钟前"},
        {id:'渠道经理-渠道经理',name:'江西',age:"2小时前"},
        {id:'蚂蚁集团-业务发展专员-华东区（支付宝）',name:'上海',age:"1分钟前"},
        {id:'阿里云智能事业群多端应用',name:'杭州',age:"3分钟前"},
        {id:'阿里文娱优酷-品牌传媒',name:'北京',age:"1小时前"},
        {id:'阿里集团景区业务专员（政府方向）-支付宝',name:'重庆',age:"10分钟前"},
        {id:'阿里影业-高级法务专员-电商平台',name:'杭州',age:"8分钟前"},
        {id:'本地生活-业务专员-北京',name:'北京',age:"15分钟前"},
        {id:'渠道经理-渠道经理',name:'江西',age:"2小时前"},
        {id:'蚂蚁集团-业务发展专员-华东区（支付宝）',name:'上海',age:"1分钟前"},
        {id:'阿里云智能事业群多端应用',name:'杭州',age:"3分钟前"},
        {id:'阿里文娱优酷-品牌传媒',name:'北京',age:"1小时前"},
        {id:'阿里集团景区业务专员（政府方向）-支付宝',name:'重庆',age:"10分钟前"},
        {id:'阿里影业-高级法务专员-电商平台',name:'杭州',age:"8分钟前"},
        {id:'本地生活-业务专员-北京',name:'北京',age:"15分钟前"},
        {id:'渠道经理-渠道经理',name:'江西',age:"2小时前"},
        {id:'蚂蚁集团-业务发展专员-华东区（支付宝）',name:'上海',age:"1分钟前"},
        {id:'阿里云智能事业群多端应用',name:'杭州',age:"3分钟前"},
        {id:'阿里文娱优酷-品牌传媒',name:'北京',age:"1小时前"},
        {id:'阿里集团景区业务专员（政府方向）-支付宝',name:'重庆',age:"10分钟前"},
        {id:'阿里影业-高级法务专员-电商平台',name:'杭州',age:"8分钟前"},
    ]
    let [list,setList]=useState(users)
   
    let timer=setInterval(movement,10)
    function movement(){
        if(Math.abs(top)>30*users.length-150){
            top=10
            setList(users)
         }
        setTop(top-0.3)
        clearInterval(timer)
    }
    function stop(){
        clearInterval(timer)
    }

  return (
      <div className={styles.joblist}>
          <p><span>最新职位</span> <a href="#">更多</a></p>

          <div className={styles.NewJob}>
              <ul style={{ marginTop:top }} onMouseEnter={stop} onMouseLeave={movement}>
                  {
                     list.map((item,index)=>{
                         return (
                         <li key={index}> <span>{item.id}</span><span>{item.name}</span><span>{item.age}</span></li>
                         )
                     }) 
                  }
              </ul>
          </div>
      </div>
  )
}