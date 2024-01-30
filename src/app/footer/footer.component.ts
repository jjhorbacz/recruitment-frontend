import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    const footerButton = document.querySelector('.show-button')
    const buttonArrow = footerButton.querySelector('.footerArrow')
    const frame = document.querySelector('.show-block')

    const addUserData = document.querySelector('.addUserData')
    const headerTitle = document.querySelector('.header-title')

    const resetSettings = document.querySelector('.resetSettings')


    let changeButton = () => {
      if (buttonArrow.getAttribute('data-button') === "frame-closed") {
        frame.removeAttribute("style")
        buttonArrow.classList.add('fa-chevron-down')
        buttonArrow.classList.remove('fa-chevron-up')
        buttonArrow.setAttribute('data-button', 'frame-opened')
        setTimeout(() => {
          frame.setAttribute("style", "display: block; animation-name: none;")
          if (window.screen.width < 768) {
            footerButton.classList.remove('showIt')
            footerButton.classList.add('hideIt')
          }
          if (window.screen.width > 768 && window.screen.width < 991) {
            footerButton.classList.remove('showItt')
            footerButton.classList.add('hideItt')
          }
          if (window.screen.width > 991 && window.screen.width < 1199) {
            footerButton.classList.remove('showIttt')
            footerButton.classList.add('hideIttt')
          }
          if (window.screen.width > 1199) {
            footerButton.classList.remove('showItttt')
            footerButton.classList.add('hideItttt')
          }
        }, 301);

      } else if (buttonArrow.getAttribute('data-button') === "frame-opened") {
        frame.removeAttribute("style")
        buttonArrow.classList.add('fa-chevron-up')
        buttonArrow.classList.remove('fa-chevron-down')
        buttonArrow.setAttribute('data-button', 'frame-closed')
        if (window.screen.width < 768) {
          frame.setAttribute("style", "animation-name: hideIt;")
          footerButton.classList.remove('hideIt')
          footerButton.classList.add('showIt')
        }
        if (window.screen.width > 768 && window.screen.width < 991) {
          frame.setAttribute("style", "animation-name: hideItt;")
          footerButton.classList.remove('hideItt')
          footerButton.classList.add('showItt')
        }
        if (window.screen.width > 991 && window.screen.width < 1199) {
          frame.setAttribute("style", "animation-name: hideIttt;")
          footerButton.classList.remove('hideIttt')
          footerButton.classList.add('showIttt')
        }
        if (window.screen.width > 1199) {
          frame.setAttribute("style", "animation-name: hideItttt;")
          footerButton.classList.remove('hideItttt')
          footerButton.classList.add('showIt')
        }
        setTimeout(() => {
          frame.setAttribute("style", "display: none;")
        }, 301);

      }
    }

    let displayUserData = () => {
      if (document.querySelector('.user') === null) {
        const user = document.createElement("p")
        user.classList.add('header-title-text', 'header-title-text__position', 'header-title-text__view', 'user')
        user.textContent = 'Jakub Horbacz'
        headerTitle.appendChild(user)
        user.setAttribute('id', "userName")
        addUserData.querySelector('a').innerHTML = '<span class="fa-li"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>schowaj&nbsp;dane&nbsp;osobowe'
      } else {
        const userName = document.getElementById('userName')
        document.querySelector('.header-title').removeChild(userName);
        addUserData.querySelector('a').innerHTML = '<span class="fa-li"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>pokaż&nbsp;dane&nbsp;osobowe'
      }
    }

    let resetAllSettings = () => {
      if (document.querySelector('.user') === null) {

      } else {
        const userName = document.getElementById('userName')
        document.querySelector('.header-title').removeChild(userName);
        addUserData.querySelector('a').innerHTML = '<span class="fa-li"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>pokaż&nbsp;dane&nbsp;osobowe'
      }
    }

    footerButton.addEventListener("click", changeButton)

    addUserData.addEventListener("click", displayUserData)

    resetSettings.addEventListener('click', resetAllSettings)
  }

}






