<template>
  <div class="classify">
	<Search></Search>
	<cMain></cMain>
  </div>
</template>

<script>
import Search from '@/components/search'
import cMain from './component/cMain'
export default {
  name: 'classify',
  data () {
    return {
      
    }
  },
  components: {
  	Search,
  	cMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
