export const CategoryComponent = {
    data(){
        return {
            categories: [
                {
                    id: 1,
                    title: 'Halfmoon',
                    description : 'Jenis ini memiliki ciri sirip dan ekor yang seolah menyatu dan membentuk setengah lingkaran.'
                },
                {
                    id: 2,
                    title: 'Crown Tail',
                    description : 'Jenis ini memiliki ciri ekor yang akan membentuk seperti mahkota ketika dibalik.'

                },
                {
                    id: 3,
                    title: 'Double Tail',
                    description : 'Jenis ini terkenal memiliki ciri ekornya bercabang dua ini sangat indah karena siripnya yang lebar.'

                },
                
            ]
        }
    },
    computed: {
        category() {
            return this.categories.filter((category)=>{
                return category.id === parseInt(this.$route.params.id)                
            })[0]
        }
    },
    template: `<div >
            <h1 class="category">Category :  {{ category.title }}</h1>
            <ul>
                <li v-for="(num, value) of category">
                    {{ num +' : '+ value }} <br>
                </li>
            </ul>
        </div>`,
   
}