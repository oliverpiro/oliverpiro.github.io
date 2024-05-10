let truckImg = document.getElementById('truck_img');

if (window.screen.orientation.type === 'portrait-primary') {
    truckImg.classList.remove('d-none');
    console.log('show truck');
} else {
    truckImg.classList.add('d-none');
    console.log('hide truck');
}