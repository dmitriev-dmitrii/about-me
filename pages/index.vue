<template>
<div> 
  <MyName/>
  <HardSkills/>
  <WorkList/>
  <PortfolioList/>
  <Form/>
</div>
</template>

<script>
import MyName from '@/components/pages/home/MyName';
import HardSkills from '@/components/pages/home/HardSkills';
import WorkList from '@/components/pages/home/WorkList';
import PortfolioList from '@/components/pages/home/PortfolioList';
import Form from '@/components/pages/home/Form';

export default {
components:{
  MyName,
  HardSkills,
  WorkList,
  PortfolioList,
  Form,
}
}
</script>
