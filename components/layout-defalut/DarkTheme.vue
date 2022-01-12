<template>
  <label  id="darck-theme-label" :class="{ active : darkTheme }">
    <input  v-model="darkTheme" aria-label="сменить расцветку сайта" type="checkbox"  @input="setTheme"   />
  </label>
</template>

<script>
export default 

{
data: ()=> {
  return{
    darkTheme:true,
  }
},
mounted: ()=> {
  // this.methods.setTheme();
},
methods: {
  setTheme :()=>{
    // if(this.darkTheme){
    //     html.setAttribute('data-theme', 'dark');
    //   }
    // else{
    //     html.setAttribute('data-theme', 'light');
    //     }

      }
},

// },

// mounted : function () {
  
//     let isDarkDefalut = !!window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (isDarkDefalut && localStorage.isChecked != 'false') {

//     document.documentElement.setAttribute('data-theme', 'dark');
//     this.isChecked=true;
//     localStorage.isChecked = true;

//     }
// }
// ,

  // watch:{
    // isChecked() {
    //   localStorage.isChecked = this.isChecked;
    // }
  // },

}

</script>


<style  lang="scss">

$base: 1.6rem;

#darck-theme-label
{
  display: block;
  height: $base;
  width: $base * 2;

  border-radius: $base;

  z-index: 1;
  position: relative;

  transition: 0.2s ease;
  box-shadow: 0 0 0 1px #c5c5c5;
  &:hover{
    box-shadow: 0 0 0.3rem 0.2rem currentColor;
  }
}

#darck-theme-label
{
  &::before
  {  
  content: '';
  display: block;
  height:100%;
  width:50%;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #efefef inset;
  background-color:yellow;
  position: absolute;
  left:0 ;
  top: 0; 
  transform: translateX(0);
  transition: all 0.2s ease;
  }

}
#darck-theme-label.active
{
  &::before
  {  
  box-shadow: 0 0 0 1px #fff inset;
  transform: translateX(100%);
  background-color: $mainAccentColor;
  }
}

#darck-theme-label > input[type=checkbox]
{
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  z-index: 1;
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}
</style>
