<template>
  

  
                  <tr class="odd gradeX">
                 
                    <td style="width:90%;font-size:14px"
                    
                    > {{article.libelle || 'Non renseigné'}}</td>

                          <div class="btn-group">
                         <td>
              
               <button class="btn btn-info" @click.prevent="$emit('modification', article)">
                <span class=""><i class="icon-edit"> Modifier</i></span></button>
             
                  </td>
                  <td>
               <button class="btn btn-danger" @click.prevent="$emit('suppression', article.id)">
                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
                </td>
            </div>


                    <!-- <td>
                      <button class="btn btn-danger" @click.prevent="$emit('suppression', article.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td> -->
                  </tr>



  
  
</template>

<script>


export default {
    name: 'ModelItem',
     props: {
    article: Object,
  },
 

  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
        
      }
    },
     show(){
        return this.isOver = true
    },

    kit(){
        return this.isOver = false
 
    },
    br: function (){
    this.$emit('make-br', this.article.children)
  
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-modification', this.article)
        this.isOpen = true
      }
    },

    //    makeFor: function () {
    //   	this.$emit('create-children', this.article)
      
    // }
  }
}
</script>
<style>

.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>

