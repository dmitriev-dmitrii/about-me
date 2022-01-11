<template>

<label id="darck-theme-toggle"
  >
    <input
      aria-label="сменить расцветку сайта"
      type="checkbox"
      name="darck-theme-checkbox"
    />
  </label>
</template>

<script>
export default 

{
// data:()=>
// ({
//   isChecked : '',
// }),

// methods: {

// setTheme (isChecked) {
// const html = document.documentElement;

//         if(isChecked){
//             html.setAttribute('data-theme', 'dark');
//         }
//         else{
//             html.setAttribute('data-theme', 'light');
//         }
// },

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


<style scoped lang="scss">

#darck-theme-checkbox {
  
  width: 100%;
  height: 100%;

cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

// на случай если  -appearance не работает  скрываем чекбокс за before от label
  position: absolute;
left: 0;
top: 0;
z-index: -1;
//

  transition: 0.2s ease;
  
}

#darck-theme-toggle {
  $base: 1.3rem;

  position: relative;

  display: inline-block;
  cursor: pointer;

  height: $base;
  width: $base * 2;

  border-radius: 2rem;
  
  transition: 0.2s ease;

&::before,
&:after
{
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.2s ease;
}

&:before{

  width: 100%;
  height: 100%;
  border-radius: 2rem;
  box-shadow: 0 0 0 1px #777;
  background-color: $mainTxtColor;

}

&:after {

    height: $base;
    width: $base;

    border-radius: 50%;
    background-color: yellow;
    box-shadow: 0 0 0 0.05rem $mainTxtColor inset;
  }

&:hover,&:focus
{

&:before{
    box-shadow: 0 0 .3rem .2rem $mainTxtColor;
}
}
}

#darck-theme-toggle.checked {

    &::before {
    background-color:#ffff;
  }
  
  &:after {
    transform: translateX(100%);
    background-color: $mainAccentColor;
  }
}
</style>
