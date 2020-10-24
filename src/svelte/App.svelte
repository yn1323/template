<script>
  export let word
  import {sample} from '../js/store'
  import util from '../js/util'
  import Text from './Text'
  // Set initial store
  sample.set(0)

  function sayHello() {
    $sample++
    util.sayHello()
  }
</script>

<img src="/img/note.png" alt="image" />
<h1>
  <Text />
  {word}
</h1>

<button on:click={sayHello}>{$sample} times clicked</button>
