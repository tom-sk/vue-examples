
// var app = new Vue({
//     el: '#root',
//     data: {
//       tasks: [
//         {description: 'Go to the store', completed: false},
//         {description: 'Do some work', completed: false},
//         {description: 'Clean inbox', completed: false},
//         {description: 'Clean room', completed: false}
//       ],
//       newTask: ""
//     },
//     methods: {
//       // completed: function(task){
//       //   task.completed = true;
//       // },
//       addItem: function(){
//         this.tasks.push({description: this.newTask, completed: false});
//         this.newTask = '';
//       }
//     },
//     computed: {
//       incompleteTasks: function(){
//         return this.tasks.filter(function(task){
//           return task.completed;
//         });
//       }
//     }
//   });

//   Vue.component('task-list', {
//     template: '<div><task v-for="task in tasks"> {{ task.description }} </task></div>',
//     data: function(){
//       return {
//         tasks: [
//           {description: 'Go to the store', completed: false},
//           {description: 'Do some work', completed: false},
//           {description: 'Clean inbox', completed: false},
//           {description: 'Clean room', completed: false}
//         ]
//       }
//     }
//   })

// Vue.component('task', {
// 	template: '<li><slot></slot></li>'
// })


//   new Vue({
//     el: '#root2',
    
//   });



//   Vue.component('message-box', {
//     props:['title','body'],
//     data: function(){
//       return {
//         isVisiable: true
//       }
//     },
//     template: `
//       <article class="message" v-show="isVisiable">
//         <div class="message-header">

//           <p> {{ title }} </p>
          
//           <button class="delete" @click="isVisiable = false"></button>

//         </div>
//         <div class="message-body">

//           {{ body }}

//         </div>
//       </article>
//           `
//   })

//   new Vue({
//     el: '#root3'
//   })

//   Vue.component('modal', {
//     template: `
//     <div class="modal is-active">
//       <div class="modal-background"></div>
//       <div class="modal-content">
//         <div class="box">
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quas dicta minus nam, dolore culpa 
//             natus debitis et quod architecto enim dolorem soluta eveniet sapiente repudiandae labore nihil, sit ab.
//           </p>
//         </div>
//       </div>
//       <button class="modal-close" @click="$emit('close')"></button>
//     </div>
//     `
//   })

//   new Vue({
//     el: '#root4',
//     data: {
//       showModal: false
//     }
//   })


Vue.component('tabs', {
  template: `
    <div>
        <div class="tabs">
          <ul>
            <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }"> 
              <a :href="tab.href" @click="selectTab(tab)" > {{tab.name}} </a> 
            </li>
          </ul>
        </div>

        <div class="tabs-details">
          <slot></slot>
        </div>
    </div>
  `,
  data: function(){
    return {
      tabs:[]
    }
  },
  created: function(){
    this.tabs = this.$children;
  },
  methods: {
    selectTab: function(selctedTab){
      this.tabs.forEach(function(tab){
        tab.isActive = (tab.name == selctedTab.name);
      })
    }
  }
})

Vue.component('tab',{
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,
  props: {
    name: { required: true},
    selected: { default: false}
  },
  data: function(){
    return {
      isActive: false
    };
  },
  computed: {
    href: function(){
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted: function(){
    this.isActive = this.selected;
  }
})

  new Vue({
    el: '#root5',
    data: {
      showModal: false
    }
  })















