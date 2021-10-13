export const tableComponent = {
    template : `
    <tr>
        <th>id</th>
        <th>name</th>
        <th>address</th>
        <th>no hp</th>
        <th>photo profile</th>
        <th>action</th>
    </tr>
    `,
}

export const MembersComponent = {
    template : `
    <tr>
        <td>{{data.id}}</td>
        <td>{{data.name}}</td>
        <td>{{data.address}}</td>
        <td>{{data.no_hp}}</td>
        <td>
            <img width="100" :src="data.photo_profile ? photoDomain + data.photo_profile : 'https://dummyimage.com/300'" alt="foto">
        </td>
        <td>
            <button class="button" @click="$emit('editmembers', data)">Edit</button>
            <button class="button" @click="$emit('deletemember', data)">Hapus</button>
            <button class="button" @click="$emit('uploadphoto', data)">Upload</button>
        </td>
    </tr>
    `,
    data(){
        return {photoDomain : "http://demo-api-vue.sanbercloud.com/"}
    },
    props : ['data']
}