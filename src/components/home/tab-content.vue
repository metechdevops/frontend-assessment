<template>
  <div class="container">

    <div class="tab-content-wrapper">
      <nav class="mt-5 mb-4">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button v-for="(tab,tabIndex) in tabs" :key="tab.slug" :class="[ tabIndex == 0 ? 'active': '']" class="nav-link" :id="tab.slug+'-tab'" data-bs-toggle="tab" :data-bs-target="'#'+tab.slug" type="button" role="tab" :aria-controls="tab.slug" aria-selected="false">{{tab.title}}</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div v-for="(tab,contentIndex) in tabs" :class="[ contentIndex == 0 ? 'show active': '']" class="tab-pane fade" :id="tab.slug" role="tabpanel" :aria-labelledby="tab+'-tab'" :tabindex="index" v-html="tab.content"></div>
      </div>
    </div>

    <div class="accordion mt-5" id="accordionExample">
      <div v-for="(accordion,accordionIndex) in tabs" class="accordion-item">
        <h2 class="accordion-header" :id="'heading-'+accordionIndex">
         <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+accordion.slug" :aria-expanded="[ accordionIndex == 0 ? true: false]" :aria-controls="accordion.slug">
            {{accordion.title}}
          </button>
        </h2>
        <div :id="accordion.slug" class="accordion-collapse collapse" :class="[ accordionIndex == 0 ? 'show': '']" :aria-labelledby="'heading-'+accordionIndex" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-html="accordion.content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import contentData from './../../assets/data.json'

export default {
  data() {
    return {
      tabs: contentData,
    };
  },
};
</script>

<style scoped>
#accordionExample {
  display:none
}
@media (min-width: 768px) and (max-width: 1024px){
  #accordionExample {
    display:none
  }
}

@media (max-width: 767px) {
  .tab-content-wrapper {
    display:none
  }
  #accordionExample {
    display:block
  }
}

</style>
