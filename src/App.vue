<template>
<div>
    <m-nav navClass="teal">
      <a href="#" class="brand-logo" slot="logo">Material Sample</a>
    </m-nav>
    <m-row>
      <m-grid s12>
        <m-progress-linear indeterminate></m-progress-linear>
      </m-grid>
      <m-grid id="card" class="scrollspy" s12>
        <m-card>
          <div class="card-content">
            <span class="card-title">Card Title</span>
            <p>Example of card text for a visual.</p>
          </div>
          <div class="card-action">
            <a href="#">Link Text</a>
          </div>
        </m-card>
      </m-grid>
      <m-grid s12>
        <m-btn type="button" wavesLight>Button</m-btn>
        <m-btn-link id="featureDis" type="button" class="pulse" floating wavesLight>B</m-btn-link>
        <m-btn type="button" wavesLight v-m-tap-target:fdsample>Open Feature Discovery</m-btn>
        <m-tap-target id="fdsample" dataActivates="featureDis">
          <h2>FD Title</h2>
          <p>Feature Discovery bit of text</p>
        </m-tap-target>
      </m-grid>
      <m-grid s12>
            <m-fab toolbar toggle icon="menu">
              <ul slot="items">
                <li>
                  <m-btn-link wavesLight class="cyan"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                  <m-btn-link wavesLight class="yellow"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                  <m-btn-link wavesLight class="red"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                  <m-btn-link wavesLight><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
              </ul>
            </m-fab>
          </m-grid>
          <m-grid id="breadcrumbs" class="scrollspy" s12>
            <m-breadcrumbs class="teal" :items="navActions"></m-breadcrumbs>
          </m-grid>
    </m-row>
</div>

</template>

<script>
export default {
  data(){
    return {
      navActions: [
        { href: '#', text: 'First' },
        { href: '#', text: 'Second' },
        { href: '#', text: 'Third' }
      ]
    }
  }
}

</script>

<style lang="scss">
#app {
  margin-top: 60px;
}

</style>
