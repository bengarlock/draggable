
document.addEventListener("DOMContentLoaded", () => {

    const onClickHandler = () => {
        document.addEventListener('click', e => {
            if (e.target.id === 'add') {
                const root = document.getElementById('root')
                const div = document.createElement('div')
                div.className = 'item'

                const nwDiv = document.createElement('div')
                nwDiv.className = "resizer nw"

                const neDiv = document.createElement('div')
                neDiv.className = "resizer ne"

                const swDiv = document.createElement('div')
                swDiv.className = "resizer sw"

                const seDiv = document.createElement('div')
                seDiv.className = "resizer se"

                div.appendChild(nwDiv)
                div.appendChild(neDiv)
                div.appendChild(swDiv)
                div.appendChild(seDiv)

                root.appendChild(div)
            }
        })
    }

    const onMouseDownHandler = () => {
        document.addEventListener('mousedown', e => {
            if (e.target.className === 'item') {
                drag(e.target)
            } else if (e.target.className.includes('resizer')) {
                resize(e.target)
            }
        })
    }


    const drag = (item) => {
        window.addEventListener('mousemove', mousemove)
        window.addEventListener('mouseup', mouseup)
        let prevX = item.clientX;
        let prevY = item.clientY;

        function mousemove(e) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;
            const rect = item.getBoundingClientRect();

            item.style.left = rect.left - newX + 'px';
            item.style.top = rect.top - newY + 'px';

            prevX = e.clientX
            prevY = e.clientY
        }

            function mouseup() {
                window.removeEventListener('mousemove', mousemove)
                window.removeEventListener('mouseup', mouseup)
            }
    }

    const resize = (item) => {
        const box = item.parentElement

        window.addEventListener('mousemove', mousemove)
        window.addEventListener('mouseup', mouseup)

        let prevX = box.clientX;
        let prevY = box.clientY;

        function mousemove(e) {
            const rect = box.getBoundingClientRect()

            if (item.classList.contains('se')) {
                box.style.width = rect.width - (prevX - e.clientX) + 'px'
                box.style.height = rect.height - (prevY - e.clientY) + 'px'
            } else if (item.classList.contains('sw')) {
                console.log("sw")
                box.style.width = rect.width - (prevX + e.clientX) + 'px'
                box.style.height = rect.height - (prevX + e.clientY) + 'px'
            }

            prevX = e.clientX;
            prevY = e.clientY

        }

        function mouseup() {
            window.removeEventListener('mousemove', mousemove)
            window.removeEventListener('mouseup', mouseup)
        }
    }

    onClickHandler()
    onMouseDownHandler()

})

