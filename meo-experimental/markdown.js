// dont be fooled 
// theres more than just markdown stuff in here
// im bad at naming things ok

function escapeHTML(content) {
    const escapedinput = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

    return escapedinput;
}

function erimd(content) {
    const text = content
        .replace(/&lt;:(\w+):(\d+)&gt;/g, '<img src="https://cdn.discordapp.com/emojis/$2.webp?size=96&quality=lossless" alt="$1" title="$1" class="emoji">')
        .replace(/&lt;a:(\w+):(\d+)&gt;/g, '<img src="https://cdn.discordapp.com/emojis/$2.gif?size=96&quality=lossless" alt="$1" title="$1" class="emoji">');

    return text;
}

function loadinputs() {
    const inputs = `
    <div class='message-container'>
        <button class='message-tool button' id='attach' value='Attachments' onclick='uploadImage()' aria-label="Attachments">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM18.7896 13.1978L13.2046 13.1982L13.2051 18.7832C13.2056 19.4453 12.6694 19.9814 12.0068 19.9814C11.3447 19.9814 10.8076 19.4443 10.8086 18.7832V13.1982L5.20996 13.1987C4.54785 13.1987 4.01123 12.6621 4.01123 12C4.01074 11.3384 4.54736 10.8018 5.20947 10.8018H10.8081L10.8086 5.2168C10.8081 4.79785 11.0229 4.4292 11.3486 4.21484C11.5376 4.09033 11.7637 4.01807 12.0068 4.01807C12.6685 4.01758 13.2056 4.55469 13.2051 5.21631L13.2046 10.8013H18.7896C19.4517 10.8008 19.9878 11.3369 19.9878 11.9995C19.9883 12.6616 19.4517 13.1982 18.7896 13.1978Z" fill="currentColor"/>
            </svg>
        </button>
        <textarea type='text' oninput="autoresize()" class='message-input text' id='msg' rows='1' autocomplete='false' placeholder='What&apos;s on your mind?' aria-label="Message Input"></textarea>
        <button class='message-tool button emoji-button' id='emojis' value='Emojis' onclick='togglePicker()' aria-label="Emoji Picker">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9.77778C4 9.77778 5.33333 10.2222 8 10.2222C10.6667 10.2222 12 9.77778 12 9.77778C12 9.77778 11.1111 11.5556 8 11.5556C4.88889 11.5556 4 9.77778 4 9.77778Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4184 12.4183 16 8 16C3.58171 16 0 12.4184 0 8C0 3.5816 3.58171 0 8 0C12.4183 0 16 3.5816 16 8ZM8 9.33377C6.38976 9.33377 5.32134 9.14627 4 8.88932C3.69824 8.83116 3.11111 8.88932 3.11111 9.77821C3.11111 11.556 5.15332 13.7782 8 13.7782C10.8462 13.7782 12.8889 11.556 12.8889 9.77821C12.8889 8.88932 12.3018 8.83073 12 8.88932C10.6787 9.14627 9.61024 9.33377 8 9.33377ZM5.33333 7.55556C5.94699 7.55556 6.44444 6.85894 6.44444 6C6.44444 5.14106 5.94699 4.44444 5.33333 4.44444C4.71967 4.44444 4.22222 5.14106 4.22222 6C4.22222 6.85894 4.71967 7.55556 5.33333 7.55556ZM11.7778 6C11.7778 6.85894 11.2803 7.55556 10.6667 7.55556C10.053 7.55556 9.55556 6.85894 9.55556 6C9.55556 5.14106 10.053 4.44444 10.6667 4.44444C11.2803 4.44444 11.7778 5.14106 11.7778 6Z" fill="currentColor"/>
            </svg>
        </button>
        <button class='message-send button' id='post' value='Post!' onclick='sendpost()' aria-label="Send Message">
            <svg class='sendicn' role='img' width='16' height='16' viewBox='0 0 16 16'>
                <path d='M8.2738 8.49222L1.99997 9.09877L0.349029 14.3788C0.250591 14.691 0.347154 15.0322 0.595581 15.246C0.843069 15.4597 1.19464 15.5047 1.48903 15.3613L15.2384 8.7032C15.5075 8.57195 15.6781 8.29914 15.6781 8.00007C15.6781 7.70101 15.5074 7.4282 15.2384 7.29694L1.49839 0.634063C1.20401 0.490625 0.852453 0.535625 0.604941 0.749376C0.356493 0.963128 0.259941 1.30344 0.358389 1.61563L2.00932 6.89563L8.27093 7.50312C8.52405 7.52843 8.71718 7.74125 8.71718 7.99531C8.71718 8.24938 8.52406 8.46218 8.27093 8.4875L8.2738 8.49222Z' fill='currentColor'></path>
            </svg>
        </button>
        <div id="emojipicker"></div>
    </div>
    <div class="sub-msg-cnt">
    <span id="typing-indicator"></span>
    <span id="edit-indicator"></span>
    </div>
    <div id='msgs' class='posts'></div>
    `;
    return inputs;
}

function buttonbadges(content) {
    content.querySelectorAll('p a').forEach(link => {
        link.setAttribute('target', '_blank');
        const url = link.getAttribute('href');
        const fileExtension = url.split('.').pop().toLowerCase().split('?')[0];
        const fileDomain = url.includes('tenor.com/view');
        
        if ((['png', 'jpg', 'jpeg', 'webp', 'gif', 'mp4', 'webm', 'mov', 'm4v'].includes(fileExtension)) || fileDomain) {
            link.classList.add('attachment');
            link.innerHTML = '<svg class="icon_ecf39b icon__13ad2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M10.57 4.01a6.97 6.97 0 0 1 9.86 0l.54.55a6.99 6.99 0 0 1 0 9.88l-7.26 7.27a1 1 0 0 1-1.42-1.42l7.27-7.26a4.99 4.99 0 0 0 0-7.06L19 5.43a4.97 4.97 0 0 0-7.02 0l-8.02 8.02a3.24 3.24 0 1 0 4.58 4.58l6.24-6.24a1.12 1.12 0 0 0-1.58-1.58l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5a3.12 3.12 0 1 1 4.42 4.42l-6.24 6.24a5.24 5.24 0 0 1-7.42-7.42l8.02-8.02Z" class=""></path></svg><span> attachments</span>';
        } else if (url === "https://meo-32r.pages.dev/" || url === "https://meo-32r.pages.dev") {
            link.classList.add('attachment');
            link.innerHTML = '<span class="ext-link-wrapper"><span class="link-icon-wrapper"><img width="14px" class="ext-icon" src="images/links/meo_1x.png"></span>meo</span>';
        } else {
            // find a better method to do this
            const socregex = {
                'twitter': /twitter\.com\/@(\w+)/,
                'discord_user': /discord\.com\/users\/(\w+)/,
                'discord_channel': /discord\.com\/channels\/(\w+)/,
                'discord_server': /discord\.gg\/(\w+)/,
                'youtube': /youtube\.com\/@(\w+)/,
                'instagram': /instagram\.com\/(\w+)/,
                'facebook': /facebook\.com\/(\w+)/,
                'scratch': /scratch\.mit.edu\/users\/(\w+)/,
                'meower_user': /app.meower\.org\/users\/(\w+)/,
                'meower_share': /meo-32r\.pages\.dev\/share\?id=([\w-]+)/
            };
            
            const socialmedicns = {
                'twitter': 'twitter_1x.png',
                'discord_user': 'discord_1x.png',
                'discord_channel': 'discord_1x.png',
                'discord_server': 'discord_1x.png',
                'youtube': 'youtube_1x.png',
                'instagram': 'instagram_1x.png',
                'facebook': 'facebook_1x.png',
                'scratch': 'scratch_1x.png',
                'meower_user': 'meo_1x.png',
                'meower_share': 'meo_1x.png'
            };
    
            for (const [platform, regex] of Object.entries(socregex)) {
                const match = url.match(regex);
                if (match) {
                    const username = match[1];
                    link.classList.add('ext-link');
                    const icon = socialmedicns[platform];
                    link.innerHTML = `<span class="ext-link-wrapper"><span class="link-icon-wrapper"><img width="14px" class="ext-icon" src="images/links/${icon}"></span>${username}</span>`;
                }
            }
        }
    });
    
    return content.innerHTML;
}

function embed(links) {
    if (links) {
        let embeddedElements = [];

        links.forEach(link => {
            const baseURL = link.split('?')[0];
            const fileExtension = baseURL.split('.').pop().toLowerCase();
            const fileName = baseURL.split('/').pop();

            let embeddedElement;

            if (['png', 'jpg', 'jpeg', 'webp', 'gif'].includes(fileExtension)) {
                let imgElement = document.createElement("img");
                imgElement.setAttribute("src", link);
                imgElement.setAttribute("onclick", `openImage('${link}')`);
                imgElement.setAttribute("alt", fileName);
                imgElement.classList.add("embed");
                
                //var imgLink = document.createElement("a");
                //imgLink.setAttribute("href", baseURL);
                //imgLink.setAttribute("target", "_blank");
                //imgLink.appendChild(imgElement);
                //embeddedElement = imgLink;
                embeddedElement = imgElement;

                
                
            } else if (['mp4', 'webm', 'mov', 'mp3', 'wav', 'ogg', 'mkv'].includes(fileExtension)) {
                embeddedElement = document.createElement("video");
                embeddedElement.setAttribute("src", baseURL);
                embeddedElement.setAttribute("controls", "controls");
                embeddedElement.setAttribute("style", "max-width: 300px;");
                embeddedElement.setAttribute("alt", fileName);
                embeddedElement.classList.add("embed");
            }

            const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const youtubeMobRegex = /^(https?:\/\/)?(www\.)?(m\.youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            if (youtubeRegex.test(link) || youtubeMobRegex.test(link)) {
                let match
                if (youtubeRegex.test(link)) {
                    match = link.match(youtubeRegex);
                } else {
                    match = link.match(youtubeMobRegex);
                }
                
                const videoId = match[4];
                
                embeddedElement = document.createElement("iframe");
                embeddedElement.setAttribute("width", "100%");
                embeddedElement.setAttribute("height", "315");
                embeddedElement.setAttribute("style", "max-width:500px;");
                embeddedElement.setAttribute("class", "embed");
                embeddedElement.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + videoId);
                embeddedElement.setAttribute("title", "YouTube video player");
                embeddedElement.setAttribute("frameborder", "0");
                embeddedElement.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
                embeddedElement.setAttribute("allowfullscreen", "");
            } else if (link.includes('open.spotify.com')) {
                const spotifyRegex = /track\/([a-zA-Z0-9]+)/;
                const match = link.match(spotifyRegex);
                if (match) {
                    const trackId = match[1];

                    embeddedElement = document.createElement("iframe");
                    embeddedElement.setAttribute("style", "border-radius: 12px;max-width:500px;");
                    embeddedElement.setAttribute("src", `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`);
                    embeddedElement.setAttribute("width", "100%");
                    embeddedElement.setAttribute("height", "80px");
                    embeddedElement.setAttribute("frameBorder", "0");
                    embeddedElement.setAttribute("allowfullscreen", "");
                    embeddedElement.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture");
                    embeddedElement.setAttribute("loading", "lazy");
                    
                    embeddedElement.classList.add("embed");
                }
            } else if (link.includes('tenor.com')) {
                const tenorRegex = /\d+$/;
                const tenorMatch = link.match(tenorRegex);
                const postId = tenorMatch ? tenorMatch[0] : null;

                if (postId) {
                    embeddedElement = document.createElement('div');
                    embeddedElement.className = 'tenor-gif-embed';
                    embeddedElement.setAttribute('data-postid', postId);
                    embeddedElement.setAttribute('data-share-method', 'host');
                    embeddedElement.setAttribute('data-style', 'width: 100%; height: 100%; border-radius: 5px; max-width: 400px; aspect-ratio: 1 / 1; max-height: 400px;');
                    
                    embeddedElement.classList.add("embed");
                    
                    let scriptTag = document.createElement('script');
                    scriptTag.setAttribute('type', 'text/javascript');
                    scriptTag.setAttribute('src', 'embed.js');
                    embeddedElement.appendChild(scriptTag);
                }
            }

            if (embeddedElement) {
                embeddedElements.push(embeddedElement);
            }
        });
        return embeddedElements;
    }
}

function createButtonContainer(p) {
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    buttonContainer.innerHTML = `
    <div class='toolbarContainer'>
        <div class='toolButton' onclick='sharepost()' aria-label="share" title="share">
            <svg viewBox='0 0 20 20' fill='currentColor' width='19' height='19'><path d='M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z'></path><path d='M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z'></path></svg>
        </div>
        <div class='toolButton' onclick='reportModal("${p._id}")' aria-label="report" title="report">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20 6.00201H14V3.00201C14 2.45001 13.553 2.00201 13 2.00201H4C3.447 2.00201 3 2.45001 3 3.00201V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.00201C21 6.45001 20.553 6.00201 20 6.00201Z"></path></svg>
        </div>
        <div class='toolButton' onclick='pingusr(event)' aria-label="ping" title="ping">
            <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg>
        </div>
        <div class='toolButton' onclick='reply(event)' aria-label="reply" title="reply">
            <svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z' fill='currentColor'></path></svg>
        </div>
    </div>
    `;
    let nwbtn
    if (p.u === localStorage.getItem("uname")) {
        nwbtn = document.createElement("div");
        nwbtn.classList.add("toolButton");
        nwbtn.setAttribute("onclick", `editPost('${p.post_origin}', '${p._id}')`);
        nwbtn.setAttribute("title", `edit`);
        nwbtn.setAttribute("aria-label", `edit post`);
        nwbtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg>
        `;
        buttonContainer.querySelector('.toolbarContainer').prepend(nwbtn);
        nwbtn = document.createElement("div");
        nwbtn.classList.add("toolButton");
        nwbtn.setAttribute("onclick", `deletePost("${p._id}")`);
        nwbtn.setAttribute("title", `delete`);
        nwbtn.setAttribute("aria-label", `delete post`);
        nwbtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg>
        `;
        buttonContainer.querySelector('.toolbarContainer').prepend(nwbtn);
    }
    
    if (localStorage.getItem("permissions") === "1") {
        nwbtn = document.createElement("div");
        nwbtn.classList.add("toolButton");
        nwbtn.setAttribute("onclick", `modPostModal("${p._id}")`);
        nwbtn.setAttribute("title", `moderate`);
        nwbtn.setAttribute("aria-label", `moderate post`);
        nwbtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"></path></svg>
        `;
        buttonContainer.querySelector('.toolbarContainer').prepend(nwbtn);
    }

    return buttonContainer;
}

function oldMarkdown(content) {
    const escapedinput = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const textContent = escapedinput
        .replace(/\*\*\*\*(.*?[^\*])\*\*\*\*/g, '$1')
        .replace(/\*\*(.*?[^\*])\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?[^\*])\*/g, '<em>$1</em>')
        .replace(/```([\s\S]*?)```/g, '<div class="code"><code>$1</code></div>')
        .replace(/``([^`]+)``/g, '<code>$1</code>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/^#+ (.*?$)/gm, (match, group1) => {
            const hash = match.match(/^#+/)[0].length;
            return `<h${hash}>${group1}</h${hash}>`;
        })
        .replace(/^&gt; (.*?$)/gm, '<blockquote>$1</blockquote>')
        .replace(/~~([\s\S]*?)~~/g, '<del>$1</del>')
        .replace(/(?:https?|ftp):\/\/[^\s(){}[\]]+/g, function (url) {
            return `<a href="${url.replace(/<\/?blockquote>/g, '')}" target="_blank">${url}</a>`;
        })
        .replace(/&lt;:(\w+):(\d+)&gt;/g, '<img src="https://cdn.discordapp.com/emojis/$2.webp?size=96&quality=lossless" alt="$1" width="16px" class="emoji">')
        .replace(/&lt;a:(\w+):(\d+)&gt;/g, '<img src="https://cdn.discordapp.com/emojis/$2.gif?size=96&quality=lossless" alt="$1" width="16px" class="emoji">')
        .replace(/\n/g, '<br>');

        const isEmoji = /^[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{2600}-\u{26FF}\u{2700}-\u{27BF}🫠❄️]+$/u.test(content);

    if (isEmoji) {
        textContent = '<span class="big">' + textContent + '</span>';
    }

    return textContent;
}