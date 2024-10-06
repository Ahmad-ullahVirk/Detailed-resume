document.querySelectorAll(".resume_panel").forEach(element => {
    element.style.display = 'none';})
document.querySelectorAll(".about-section").forEach(element => {
    element.style.display = 'block';})
document.querySelectorAll(".portfolio_panel").forEach(element => {
    element.style.display = 'none';})
document.querySelectorAll(".contactMe_panel").forEach(element => {
    element.style.display = 'none';})





//about me button
document.querySelector(".about_btn").addEventListener('click', () => {
    
    document.querySelectorAll(".resume_panel").forEach(element => {
        element.style.display = 'none';})
    document.querySelectorAll(".about-section").forEach(element => {
        element.style.display = 'block';})
        document.querySelectorAll(".contactMe_panel").forEach(element => {
            element.style.display = 'none';})
            document.querySelectorAll(".portfolio_panel").forEach(element => {
                element.style.display = 'none';})
    
});

// resume button
document.querySelector(".resume_btn").addEventListener('click', () => {
    
        document.querySelectorAll(".about-section").forEach(element => {
            element.style.display = 'none';})
        document.querySelectorAll(".resume_panel").forEach(element => {
            element.style.display = 'block';})
            document.querySelectorAll(".portfolio_panel").forEach(element => {
                element.style.display = 'none';})
                document.querySelectorAll(".contactMe_panel").forEach(element => {
                    element.style.display = 'none';})

        
});
// portfolio button

document.querySelector(".portfolio_btn").addEventListener('click', () => {
    
    document.querySelectorAll(".about-section").forEach(element => {
        element.style.display = 'none';})
    document.querySelectorAll(".resume_panel").forEach(element => {
        element.style.display = 'none';})
        document.querySelectorAll(".portfolio_panel").forEach(element => {
            element.style.display = 'block';})
            document.querySelectorAll(".contactMe_panel").forEach(element => {
                element.style.display = 'none';})

    
});

// contact me button

document.querySelector(".contact_btn").addEventListener('click', () => {
    
    document.querySelectorAll(".about-section").forEach(element => {
        element.style.display = 'none';})
    document.querySelectorAll(".resume_panel").forEach(element => {
        element.style.display = 'none';})
    document.querySelectorAll(".portfolio_panel").forEach(element => {
        element.style.display = 'none';})
    document.querySelectorAll(".contactMe_panel").forEach(element => {
        element.style.display = 'block';})
    
});