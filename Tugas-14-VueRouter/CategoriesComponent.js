export const CategoriesComponent = {
    data () {
        return {
            categories: [
                {
                    id: 1,
                    title: 'Halfmoon'
                },
                {
                    id: 2,
                    title: 'Crown Tail'
                },
                {
                    id: 3,
                    title: 'Double Tail'
                }
            ]
        }
    },
    template: `
        <div>
            <h1>Daftar Kategori</h1>
            <ul>
                <li v-for="category in categories">
                    <router-link :to="'/category/'+category.id">
                        {{ category.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    `
}