<template>
    <div>
      <select v-model="language">
        <option
          v-for="item in locales"
          :key="typeof item === 'object' ? item.code : item"
          :value="typeof item === 'object' ? item.code : item"
        >
          {{ typeof item === "object" ? item.name : item }}
        </option>
      </select>
    </div>
</template>

<script>


    export default{
      data(){
        return{
          language:"vi",
        }
      },
        computed:{
            locales (){
                return this.$i18n.locales
            },
            locale(){
              return this.$i18n.locale
            }
        },
       mounted() {
        this.$watch('language', (newValue, oldValue) => {
          console.log(oldValue)
          console.log(newValue)
          // this.$i18n.locale = newValue
          console.log('local mới '+this.$i18n.locale)
          this.$emit('inputData', newValue);
        })
       },
        created(){
          console.log(this.locales)
          console.log(this.locale)
        }
    }
</script>
