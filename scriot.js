const container = document.createElement("div");
container.classList.add("container")

const left_side = document.createElement("div")
left_side.classList.add("left_turn")

const userss = document.createElement("div")
userss.classList.add("users")

const userBox = document.createElement("div");
userBox.classList.add("user_box");

const exit = document.querySelector('.content-options')
const lik = document.querySelector('.content-like')
const like2 = document.querySelector('.like2')
const closeModal = document.querySelector('.close');
const modal2 = document.querySelector('.modal');
const modal = document.querySelector(".postModal")
const modal_photo = document.querySelector('.mod_photo')
const commentsList = document.getElementById('commentsList');
const nameCom = document.querySelector(".nameCom")
const photoCom = document.querySelector('.imgCom')
const co = document.querySelector('.co')
const img_modal = document.querySelector('.img_modal')

let like_kom = false

lik.onclick = () => {
    if (like_kom === false) {
        like2.src = './img/heart2.png'
        like_kom = true
    } else {
        like2.src = './img/like.png'
        like_kom = false
    }
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((photos) => {
                reload(users.slice(0, 10), photos.slice(0, 10)); 
            });
    });

function reload(users, photos) {
    users.forEach((user, index) => {
        const story = document.createElement("div");
        story.classList.add("storys");

        const avatar = document.createElement("img");
        avatar.classList.add("avatar");
         avatar.src = photos[index].url;
        avatar.alt = "";

        const span = document.createElement("span");
        span.classList.add("nick");

        if (user.name.length > 10) {
            span.innerHTML = user.name.slice(0, 12) + '...'
        } else {
            span.innerHTML = user.name;
        }

        story.append(avatar);
        story.append(span);

        userBox.append(story);
        userss.append(userBox);

        avatar.onclick = () => {
            modal2.style.display = 'flex';
            img_modal.src = photos[index].url
        };
    })
}

closeModal.onclick = () => {
    modal2.style.display = "none";
}




fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
        reloadPosts(data.slice(0, 100))
    })
   


const post = document.createElement('div');
post.classList.add('post');

function reloadPosts(photos ) {
    photos.forEach((phot ) => {


        const poster = document.createElement('div');
        poster.classList.add('poster');

        const postHeader = document.createElement('div');
        postHeader.classList.add('post_header');

        const postData = document.createElement('div');
        postData.classList.add('postData');

        const postAvatar = document.createElement('div');
        postAvatar.classList.add('post_avatar');
        const avatarImg = document.createElement('img');
        avatarImg.src = phot.url;
        avatarImg.alt = "";
        postAvatar.append(avatarImg);

        const postNick = document.createElement('div');
        postNick.classList.add('post_nick');
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        nameSpan.textContent = "Radmir";
        const countrySpan = document.createElement('span');
        countrySpan.classList.add("country");
        countrySpan.textContent = "Samararqand";
        postNick.append(nameSpan);
        postNick.append(countrySpan);

        const dotButton = document.createElement("button");
        dotButton.classList.add('dot');
        const dotImg = document.createElement("img");
        dotImg.src = "./img/dou.png";
        dotImg.alt = "";
        dotButton.append(dotImg);

        postData.append(postAvatar);
        postData.append(postNick);
        postData.append(dotButton);

        postHeader.append(postData);


        const postPhoto = document.createElement('div');
        postPhoto.classList.add('post_photo');
        const photoImg = document.createElement('img');
        photoImg.src = phot.url;
        photoImg.alt = "";
        postPhoto.append(photoImg);

        const postInfo = document.createElement('div');
        postInfo.classList.add('post_info');

        const reacts = document.createElement('div');
        reacts.classList.add('reacts');

        const leftReacts = document.createElement('div');
        leftReacts.classList.add('left_reacts');

        const likeButton = document.createElement('button');
        const likeImg = document.createElement('img');
        likeImg.src = './img/like.png';
        likeImg.setAttribute('alt', '');
        likeButton.append(likeImg);

        const commentButton = document.createElement('button');
        const commentImg = document.createElement('img');
        commentImg.src = './img/comment.png';
        commentImg.setAttribute('alt', '');
        commentButton.append(commentImg);

        const planButton = document.createElement('button');
        const planImg = document.createElement('img');
        planImg.src = './img/plan.png';
        planImg.setAttribute('alt', '');
        planButton.append(planImg);

        leftReacts.append(likeButton);
        leftReacts.append(commentButton);
        leftReacts.append(planButton);

        const rightReacts = document.createElement('div');
        rightReacts.classList.add('right_reacts');

        const addButton = document.createElement('button');
        const addImg = document.createElement('img');
        addImg.src = './img/Add.svg';

        addButton.append(addImg);

        rightReacts.append(addButton);

        reacts.append(leftReacts);
        reacts.append(rightReacts);

        const postLikes = document.createElement('span');
        postLikes.classList.add('post_likes');
        postLikes.textContent = '9,999 likes';

        const postWrite = document.createElement('div');
        postWrite.classList.add('post_write');

        const boldText = document.createElement('b');
        boldText.classList.add('bold')
        boldText.textContent = phot.name;
        const paragraph = document.createElement('p');
        paragraph.textContent = phot.title;

        postWrite.append(boldText);
        postWrite.append(paragraph);

        const postComments = document.createElement('div');
        postComments.classList.add('post_comments');

        const comments1 = document.createElement('div');
        comments1.classList.add('comments');

        const comment1 = document.createElement('div');
        comment1.textContent = 'Lorem ipsum dolor sit amet.';
        comments1.append(comment1);

        const comments2 = document.createElement('div');
        comments2.classList.add('comments');

        const comment2 = document.createElement('div');
        comment2.textContent = 'Lorem ipsum dolor sit amet.';
        comments2.append(comment2);

        const allComments = document.createElement('div');
        allComments.classList.add('all_comments');

        const viewAllComments = document.createElement('span');
        viewAllComments.textContent = 'View all comments...';

        allComments.append(viewAllComments);

        postComments.append(comments1);
        postComments.append(comments2);
        postComments.append(allComments);

        const write = document.createElement('div');
        write.classList.add('write');

        const writeSmileButton = document.createElement('button');
        writeSmileButton.classList.add('write_smile');
        const smileImg = document.createElement('img');
        smileImg.setAttribute('src', './img/smiley_icon-icons.com_69900.svg');
        smileImg.setAttribute('alt', '');
        writeSmileButton.append(smileImg);

        const commentInput = document.createElement('input');
        commentInput.setAttribute('type', 'text');
        commentInput.setAttribute('placeholder', 'add a comment...');

        const sendPostButton = document.createElement('button');
        sendPostButton.classList.add('send_post');
        sendPostButton.textContent = 'Post';
        write.append(writeSmileButton);
        write.append(commentInput);
        write.append(sendPostButton);

        postInfo.append(reacts);
        postInfo.append(postLikes);
        postInfo.append(postWrite);
        postInfo.append(postComments);
        postInfo.append(write);

        poster.append(postHeader, postPhoto, postInfo)
        post.append(poster);

       
        let like = false

        likeButton.onclick = () => {
            if (like === false) {
                likeImg.src = './img/heart2.png'
                like = true
            } else {
                likeImg.src = './img/like.png'
                like = false
            }
        }

        let add = false

        addButton.onclick = () => {
            if (add === false) {
                addImg.src = './img/favorite.png'
                add = true
            } else {
                addImg.src = './img/Add.svg'
                add = false
            }
        }


        commentImg.onclick = () => {
            container.style.display = "none"
            modal.style.display = "flex"
        }
        exit.onclick = () => {
            modal.style.display = "none"
            container.style.display = "flex"
        }


        commentImg.onclick = () => {
            container.style.display = "none"
            modal.style.display = 'block';
        
            fetch('https://jsonplaceholder.typicode.com/comments/')
                .then(response => response.json())
                .then(data => {
                    
        
                     
                    commentsList.innerHTML = '';
                    for (let i = 0; i < 50; i++) {
                        const li = document.createElement('li');
                        const p = document.createElement('p')
                        modal_photo.src = phot.url;
                        p.textContent = data[i].email; 
                        li.textContent = data[i].body; 
                        commentsList.append(li);
                        li.append(p); 
                    }
                });
        };

        return post

    })
}






left_side.append(userss, post);
container.append(left_side)
document.body.append(container)

let profile = document.querySelector('.head_circle')

profile.onclick = () => {
    window.location.href = "./index2.html";
}
