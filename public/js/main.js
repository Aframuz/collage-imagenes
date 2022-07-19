const uploadForm = document.querySelector("form")

uploadForm.addEventListener("submit", (e) => {
   e.preventDefault()
   const file = document.querySelector("input[type=file]").files[0]
   const position = document.querySelector("#collage-position").value
   const formData = new FormData()
   formData.append("file", file)
   formData.append("position", position)
   fetch("/images", {
      method: "POST",
      body: formData,
   })
      .then((res) => res.json())
      .then((res) => {
         if (res.error) {
            return alert(res.error)
         }

         const gridItem = document.querySelector(`[data-position="${res.position}"]`)
         gridItem.classList.add("filled")
         gridItem.children[0].textContent = ""
         gridItem.style.backgroundImage = `url(/uploads/${res.imgName})`
         gridItem.addEventListener("click", deleteGridItem)
      })
})

const deleteGridItem = (e) => {
   const gridItem = e.target
   const relativePath = gridItem.style.backgroundImage.slice(4, -1).replace(/"/g, "")
   const imgName = relativePath.split("/").pop()

   fetch(`/images/${imgName}`, {
      method: "DELETE",
   })
      .then((res) => res.json())
      .then((res) => {
         if (res.error) {
            return alert(res.error)
         }
         gridItem.classList.remove("filled")
         gridItem.children[0].textContent = gridItem.dataset.position
         gridItem.style.backgroundImage = ""
      })
}
