export const loadPosts = async () => {
    let post_promesse =   fetch("https://jsonplaceholder.typicode.com/posts");
    let photo_promisse = fetch("https://jsonplaceholder.typicode.com/photos");
    //resolverndo as duas promiesses ao mesmo tempo 
    const [post, photos] =  await Promise.all([post_promesse, photo_promisse]);
    const postJson = await post.json();
    const photoJson = await photos.json();
    
    //unir dois arrays em um só
    let  postsAndPhoto = postJson.map((post,index) => {
    return {...post,cover : photoJson[index].url} 

    })
    return postsAndPhoto;
}