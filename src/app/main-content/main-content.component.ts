import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {


  ngOnInit(): void {
    let jData = [];

    const addButton = document.querySelector('.add-button');
    const changeButton = document.querySelector('.change-button')
    const placeForLines = document.querySelector('.block-three-texts');
    const optionOne = document.getElementById('option-one') as HTMLInputElement;
    const optionTwo = document.getElementById('option-two') as HTMLInputElement;
    const optionThree = document.getElementById('option-three') as HTMLInputElement;

    fetch('./assets/taskdata.json')
      .then((response) => response.json())
      .then((data) => jData = data.lines)
      .catch(error => console.error('Error:', error));

    const getRandomLine = () => {
      const randomIndex = Math.floor(Math.random() * jData.length);
      if (
        placeForLines.classList.contains('firstLine') &&
        placeForLines.classList.contains('secondLine') &&
        placeForLines.classList.contains('thirdLine') &&
        placeForLines.classList.contains('fourthLine') &&
        placeForLines.classList.contains('fifthLine') &&
        placeForLines.classList.contains('sixthLine')
      ) {
        alert('End of Lines!');
      } else if (!placeForLines.classList.contains('firstLine') && randomIndex === 0) {
        placeForLines.classList.add('firstLine');
        const line = document.createElement("p")
        line.innerHTML = jData[randomIndex]
        placeForLines.appendChild(line)
      } else if (!placeForLines.classList.contains('secondLine') && randomIndex === 1) {
        placeForLines.classList.add('secondLine');
        const line = document.createElement("p")
        line.innerHTML = jData[randomIndex]
        placeForLines.appendChild(line)
      } else if (!placeForLines.classList.contains('thirdLine') && randomIndex === 2) {
        placeForLines.classList.add('thirdLine');
        const line = document.createElement("p")
        line.innerHTML = jData[randomIndex]
        placeForLines.appendChild(line);
      } else if (!placeForLines.classList.contains('fourthLine') && randomIndex === 3) {
        placeForLines.classList.add('fourthLine');
        const line = document.createElement("p")
        line.innerHTML = jData[randomIndex]
        placeForLines.appendChild(line)
      } else if (!placeForLines.classList.contains('fifthLine') && randomIndex === 4) {
        placeForLines.classList.add('fifthLine');
        const line = document.createElement("p")
        line.innerHTML = jData[randomIndex]
        placeForLines.appendChild(line)
      } else if (!placeForLines.classList.contains('sixthLine') && randomIndex === 5) {
        placeForLines.classList.add('sixthLine');
        const line = document.createElement("p")
        line.innerHTML = jData[randomIndex]
        placeForLines.appendChild(line)
      } else {
        getRandomLine()
      }
    }

    const addLine = () => {

      if (optionOne.checked) {
        if (placeForLines.classList.contains('firstLine')) {
          alert('Line One Exists!')
        } else {
          const line = document.createElement("p")
          line.innerHTML = jData[0];
          placeForLines.appendChild(line);
          placeForLines.classList.add('firstLine');
        }
      } else if (optionTwo.checked) {
        if (placeForLines.classList.contains('secondLine')) {
          alert('Line Two Exists!')
        } else {
          const line = document.createElement("p")
          line.innerHTML = jData[1];
          placeForLines.appendChild(line)
          placeForLines.classList.add('secondLine');
        }
      } else if (optionThree.checked) {
        getRandomLine();
      }

    }

    let removeClass = () => {
      if (placeForLines.lastChild.textContent == jData[0]) {
        placeForLines.classList.remove('firstLine');
      } else if (placeForLines.lastChild.textContent == jData[1]) {
        placeForLines.classList.remove('secondLine');
      } else if (placeForLines.lastChild.textContent == jData[2]) {
        placeForLines.classList.remove('thirdLine');
      } else if (placeForLines.lastChild.textContent == jData[3]) {
        placeForLines.classList.remove('fourthLine');
      } else if (placeForLines.lastChild.textContent == jData[4]) {
        placeForLines.classList.remove('fifthLine');
      } else if (placeForLines.lastChild.textContent == jData[5]) {
        placeForLines.classList.remove('sixthLine');
      }
    }

    let changeLine = () => {
      const randomIndex = Math.floor(Math.random() * jData.length);
      if (
        placeForLines.classList.contains('firstLine') &&
        placeForLines.classList.contains('secondLine') &&
        placeForLines.classList.contains('thirdLine') &&
        placeForLines.classList.contains('fourthLine') &&
        placeForLines.classList.contains('fifthLine') &&
        placeForLines.classList.contains('sixthLine')
      ) {
        alert('No more Lines to change!');
      } else if (!placeForLines.classList.contains('firstLine') && randomIndex === 0) {
        removeClass();
        placeForLines.classList.add('firstLine');
        placeForLines.lastChild.textContent = jData[randomIndex]
      } else if (!placeForLines.classList.contains('secondLine') && randomIndex === 1) {
        removeClass();
        placeForLines.classList.add('secondLine');
        placeForLines.lastChild.textContent = jData[randomIndex]
      } else if (!placeForLines.classList.contains('thirdLine') && randomIndex === 2) {
        removeClass();
        placeForLines.classList.add('thirdLine');
        placeForLines.lastChild.textContent = jData[randomIndex]
      } else if (!placeForLines.classList.contains('fourthLine') && randomIndex === 3) {
        removeClass();
        placeForLines.classList.add('fourthLine');
        placeForLines.lastChild.textContent = jData[randomIndex]
      } else if (!placeForLines.classList.contains('fifthLine') && randomIndex === 4) {
        removeClass();
        placeForLines.classList.add('fifthLine');
        placeForLines.lastChild.textContent = jData[randomIndex]
      } else if (!placeForLines.classList.contains('sixthLine') && randomIndex === 5) {
        removeClass();
        placeForLines.classList.add('sixthLine');
        placeForLines.lastChild.textContent = jData[randomIndex]
      } else {
        changeLine()
      }
    }

    addButton.addEventListener('click', addLine);

    changeButton.addEventListener('click', changeLine)

    console.log($('jData[1]').toString())

  }


}