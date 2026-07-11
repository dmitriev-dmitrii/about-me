<template class="">
  <div>
    <ul v-if="workList.length" class="experience__list">
      <li v-for="item in workList" :key="item.id" :item="item" class="experience__item">
        <h4 class="title">
          {{ item.title }}
        </h4>
        <h3>
          <span class="title">{{ item.position }}</span>
        </h3>
        <p class="description experience__item-time">
          {{ item.time }}
        </p>
        <p class="experience__item-description" v-html="item.description"></p>
      </li>
    </ul>

    <div v-else class="container">no data</div>
  </div>
</template>

<script>
export default {
  props: {
    workList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.experience__list {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}

.experience__item {
  font-size: 0.8em;
  margin: 0.5em 0;
  width: 100%;
  max-width: 35rem;

  @media (min-width: 767.98px) {
    max-width: 50%;
    align-self: flex-start;
    text-align: left;

    &:nth-child(even) {
      align-self: flex-end;
      text-align: right;
    }
  }
}

.experience__item .title {
  font-size: 1.1em;
}

.experience__item-time {
}

.experience__item-description {
  line-height: 1.3em;
}

.experience__item-description p,
ul {
}

.experience__item-description ul > li {
  list-style: inside;
  padding: 0.25rem;
}
</style>
