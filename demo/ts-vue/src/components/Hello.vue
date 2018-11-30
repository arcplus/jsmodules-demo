<template>
    <div>
        <div class="greeting"> Hello {{name}}{{exclamationMarks}} </div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() {
            this.add(1)
        },
        decrement() {
            this.add(-1)
        },
        add(num: number) {
            this.enthusiasm+=num
        }
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm+1).join('!')
        }
    }
})
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
