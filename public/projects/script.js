
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('.selectors').forEach(select => {
            select.style.display = 'none';
        });
        
        if (radio.id === 'twoUnits') {
            document.querySelector('.popular .selectors').style.display = 'block';
        }
    });
});


document.querySelectorAll('.selectors').forEach(select => select.style.display = 'none');
