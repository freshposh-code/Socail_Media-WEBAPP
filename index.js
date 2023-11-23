// SIDEBAR

const menuItems = document.querySelectorAll('.menu-item')

// MESSAGES
const messagesNotification = document.getElementById('messages-notifications')

const messages = document.querySelector('.messages')

const message = document.querySelectorAll('.message')

const messageSearch = document.getElementById('message-search')

// THEME
const theme = document.getElementById('theme')
const themeModal = document.querySelector('.customize-theme')

// FONTSIZE
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')

// COLOR
const colorPalette = document.querySelectorAll('.choose-color span')

// THEME
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')

// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS

const changeActiveItem = () => {
    menuItems.forEach(item  => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active');

        if(item.id != "notifications") {
            document.querySelector('.notification-popup').
            style.display = 'none'; 
        } else {
            document.querySelector('.notification-popup').
            style.display = 'initial'; 
            document.querySelector('#notifications .notification-count').style.display = 'none'
        } 
    })
})

// SEARCH CHATS
const searchMessage = () => {
    const val  = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none'
        }
    })
}

// SEARCH CHAT

messageSearch.addEventListener('keyup', searchMessage)

// MESSAGES

messagesNotification.addEventListener('click', () => {
     messages.style.boxShadow = '0  0 1rem var(--color-primary)'
     messagesNotification.querySelector('.notification-count').style.display = 'none'

     setTimeout(() => {
        messages.style.boxShadow = 'none';
     }, 3000)
})

// THEME CUSTUMIZATION
const openThmeModal = () => {
    themeModal.style.display = 'grid'
}

const closeThememodal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

themeModal.addEventListener('click', closeThememodal)

theme.addEventListener('click' , openThmeModal)

// FONTSIZE

// REMOVE ACTIVE CLASS FROM SPANS OR FONT SIZE SELECTORS
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active')
        
        if(size.classList.contains('font-size1')) {
            fontSize = '10px';
            // root.style.setProperty('--sticky-top-left', '5.4rem')
            // root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size2')) {
            fontSize = '13px';
            // root.style.setProperty('--sticky-top-left', '5.4rem')
            // root.style.setProperty('--sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size3')) {
            fontSize = '16px';
            // root.style.setProperty('--sticky-top-left', '-2rem')
            // root.style.setProperty('--sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size4')) {
            fontSize = '19px';
            // root.style.setProperty('--sticky-top-left', '-5rem')
            // root.style.setProperty('--sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size5')) {
            fontSize = '22px';
            // root.style.setProperty('--sticky-top-left', '-12rem')
            // root.style.setProperty('--sticky-top-right', '-35rem')
        }
        
        // CHANGE FONT SIZE OF THE ROOT OF THE HTML ELEMENT
    
    document.querySelector('html').style.fontSize = fontSize
    })

})

// CHANGE COLOR

// REMOVE ACTIVE CLASS

const removeColor = () => {
        colorPalette.forEach(color => {
        color.classList.remove('active')
    })
}


colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColor();
        let primaryHue
          color.classList.toggle('active')

        if(color.classList.contains('color1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color3')) {
            primaryHue = 352;
        }else if (color.classList.contains('color4')) {
            primaryHue = 152;
        }else if (color.classList.contains('color5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

// THEME BACKGROUND VALUES
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// CHANGE BG COLOR
const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    // ADD ACTIVE CLASS
    Bg1.classList.add('active')
    // REMOVE
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
})
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '20%'
    lightColorLightness = '15%'

    // ADD ACTIVE CLASS
    Bg2.classList.add('active')
    // REMOVE
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})


Bg3.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '10%'
    lightColorLightness = '0%'

    // ADD ACTIVE CLASS
    Bg3.classList.add('active')
    // REMOVE
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})