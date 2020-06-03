
const checkbox = document.querySelector('input[name="theme"]');

checkbox.addEventListener('change',function()
{
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'dark');

    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
{
    checkbox.click();
}