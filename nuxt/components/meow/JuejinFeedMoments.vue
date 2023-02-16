<template>
  <div>
    <h1>Moments</h1>

    <div class="moment-create">
      <div class="moment-create-input">
        <input type="text" v-model="moment.content" />
      </div>
      <div class="moment-create-action">
        <button @click="createMoment">Create</button>
      </div>
    </div>

    <div class="moments-list">
      <div v-for="(moment, index) in moments" :key="index">
        <div class="moment-info">
          author:{{ moment.attributes.author.data.attributes.username }}
        </div>
        <div class="moment-content">
          moment:{{ moment.attributes.content }}
        </div>
        <div class="moment-action-bar">
          <div class="action-like"></div>
          <div class="action-comment"></div>
          <div class="action-share"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps<{
//   moments: any
//   createMoment: any
// }>()

const { find, create } = useStrapi()

let response = await find<Moment>('moments', {
  populate: ['author'],
  sort: 'createdAt:desc',
})
let moments = reactive(response.data)


let user = useStrapiUser()
let moment = reactive({
  content: "",
  author: user
})
const createMoment = async () => {
  console.log(moment)
  await create<Moment>('moments', moment)
  response = await find<Moment>('moments', {
    populate: ['author'],
    sort: 'createdAt:desc',
  })
  // moments = response.data
  response.data.forEach((item: any) => {
    moments.push(item)
  })
}
</script>

<style lang="scss" scoped>
.moment-create {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid #000;

  .moment-create-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid #000;

    input {
      width: 100%;
      height: 100%;
    }
  }

  .moment-create-action {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid #000;

    button {
      width: 100%;
      height: 100%;
    }
  }
}

.moments-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #000;

  .moment-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid #000;
  }

  .moment-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid #000;
  }

  .moment-action-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid #000;

    .action-like {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100px;
      height: 100px;
      border: 1px solid #000;
    }

    .action-comment {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100px;
      height: 100px;
      border: 1px solid #000;
    }

    .action-share {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100px;
      height: 100px;
      border: 1px solid #000;
    }
  }
}
</style>