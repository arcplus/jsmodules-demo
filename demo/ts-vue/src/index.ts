import Vue from "vue"; // need config allowJS = true to enable ts to find js
import HelloComponent from "./components/Hello.vue"

new Vue({
    el: "#app",
    template: `
    <div>
    Name: <input v-model="name" type="text">
    <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: {
        name: "World"
    },
    components: {
        HelloComponent
    }
});