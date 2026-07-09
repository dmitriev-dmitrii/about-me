<template>
  <label  id='darck-theme-label' :class='{ active : darkTheme }'>
    <input  v-model='darkTheme' aria-label='сменить расцветку сайта' type='checkbox'   />
  </label>
</template>

<script>
export default 
{
data() {
    return {
        darkTheme:true,
    }
},


watch: {
    darkTheme: function () {
        let htmlElement = document.documentElement;
        if (this.darkTheme) {
            localStorage.setItem('dark-theme', 'true');
            htmlElement.setAttribute('dark-theme', 'true');
        } else {
            localStorage.setItem('dark-theme', 'false');
            htmlElement.setAttribute('dark-theme', 'false');
        }
    }
},
methods:{
  testDefalutTheme : function () {
    let htmlElement = document.documentElement;
    let localStorageDarkTheme = localStorage.getItem('dark-theme');
    let isDarkDefalut = !!window.matchMedia('(prefers-color-scheme: dark)').matches;

    if ( localStorageDarkTheme === 'true') {
        htmlElement.setAttribute('dark-theme', 'true');
        this.darkTheme = true;
        return;
    }
    if ( localStorageDarkTheme === 'false') {
        htmlElement.setAttribute('dark-theme', 'false');
        this.darkTheme = false;
        return;
    }
    if ( isDarkDefalut ){
        htmlElement.setAttribute('dark-theme', `${isDarkDefalut}`);
        this.darkTheme = isDarkDefalut;
    }
  }
},
  created() {
    this.testDefalutTheme()
  },
}

</script>


<style>

#darck-theme-label
{
  display: block;
  height: 1.6rem;
  width: 3.2rem;

  border-radius: 1.6rem;

  z-index: 1;
  position: relative;

  transition: 0.2s ease;
  box-shadow: 0 0 0 1px #c5c5c5;
}

#darck-theme-label:hover {
    box-shadow: 0 0 0.3rem 0.2rem currentColor;
  }

#darck-theme-label::before
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

#darck-theme-label.active::before
  {  
  box-shadow: 0 0 0 1px #fff inset;
  transform: translateX(100%);
  background-color: var(--main-accent-color);
  }

#darck-theme-label > input[type=checkbox]
{
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  
  appearance: none;

  z-index: 0;

  position: absolute;

  border: none;

  border-radius: 1.6rem;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}
</style>
