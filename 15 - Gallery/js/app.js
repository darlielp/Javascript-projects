// debug selectors
function getElement(selection) {
  const element = document.querySelector(selection)
  if(element) {
    return element
  } else {
    throw new Error (`Please check "${selection}" selector, no such element exists`)
  }
}

class Gallery {
  constructor(element) {
    // selectors
    this.gallery = element
    this.images = [...element.querySelectorAll('.img')]
    this.modal = getElement('.modal')
    this.modalImg = getElement('.modal-img')
    this.imageDesc = getElement('.image-desc')
    this.pictures = getElement('.pictures')
    this.closeBtn = getElement('.closeModal')
    this.nextBtn = getElement('.next')
    this.prevBtn = getElement('.prev')

    // bind functions
    this.closeModal = this.closeModal.bind(this)
    this.nextImg = this.nextImg.bind(this)
    this.prevImg = this.prevImg.bind(this)
    this.chooseImg = this.chooseImg.bind(this)
    
    // open gallery modal
    this.gallery.addEventListener("click", function(e) {
      if(e.target.classList.contains('img')) {
        this.openModal(e.target, this.images)
      }
    }.bind(this))
  }
  // open modal
  openModal(selectedImage, image) {
    this.modalImage(selectedImage)
    this.pictures.innerHTML = image.map(img => {
      return `<img src="${img.src}" title="${img.title}" data-id="${img.dataset.id}" class="${selectedImage.dataset.id === img.dataset.id ? "picture selected" : "picture"}"/>`
    }).join('')
    this.modal.style.display = "block"
    // add events
    this.closeBtn.addEventListener("click", this.closeModal)
    this.nextBtn.addEventListener("click", this.nextImg)
    this.prevBtn.addEventListener("click", this.prevImg)
    this.pictures.addEventListener("click", this.chooseImg)
  }

  // modal images 
  modalImage(selectedImage) {
    this.modalImg.src = selectedImage.src
    this.imageDesc.textContent = selectedImage.title
  }

  // close modal
  closeModal() {
    this.modal.style.display = "none"
    // remove events
    this.closeBtn.removeEventListener('click', this.closeModal)
    this.nextBtn.removeEventListener('click', this.nextImg)
    this.prevBtn.removeEventListener('click', this.prevImg)
    this.pictures.removeEventListener('click', this.chooseImg)
  }

  // next image
  nextImg() {
    const selected = this.pictures.querySelector(".selected")
    const next = selected.nextElementSibling || this.pictures.firstElementChild
    selected.classList.remove("selected")
    next.classList.add("selected")
    this.modalImage(next)
  }

  // previous image
  prevImg() {
    const selected = this.pictures.querySelector(".selected")
    const prev = selected.previousElementSibling || this.pictures.lastElementChild
    selected.classList.remove("selected")
    prev.classList.add("selected")
    this.modalImage(prev)
  }

  // choose image 
  chooseImg(e) {
    if(e.target.classList.contains('picture')) {
      const selected = this.pictures.querySelector(".selected")
      selected.classList.remove("selected")
      this.modalImage(e.target)
      e.target.classList.add("selected")
    }
  }
}

const fields = new Gallery(getElement('.fields'))
const landscape = new Gallery(getElement('.landscape'))

