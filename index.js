
document.addEventListener("DOMContentLoaded", () => {

    const onClickHandler = () => {
        document.addEventListener('click', e => {
            if (e.target.id === 'add') {
                const root = document.getElementById('root')
                const div = document.createElement('div')
                div.className = 'item'
                root.appendChild(div)
            }
        })
    }

    const onMouseDownHandler = () => {
        document.addEventListener('mousedown', e => {
            if (e.target.className === 'item') {
                drag(e.target)
            }
        })
    }


    const drag = (item) => {
        let el = item
        window.addEventListener('mousemove', mousemove)
        window.addEventListener('mouseup', mouseup)
        let prevX = item.clientX;
        let prevY = item.clientY;

        function mousemove(e) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;
            const rect = el.getBoundingClientRect();

            el.style.left = rect.left - newX + 'px';
            el.style.top = rect.top - newY + 'px';

            prevX = e.clientX
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

