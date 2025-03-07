document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const styleButtons = document.getElementById('style-buttons');
    const markCheckboxes = document.getElementById('mark-checkboxes');
    const copyButton = document.getElementById('copy-button');
    const copyNotification = document.getElementById('copy-notification');

    // State
    let selectedStyle = 'bold';
    let selectedMarks = [];
    let availableStyles = [];
    let availableMarks = {};
    
    // Replace with your actual API URL when deployed
    const API_URL = 'https://text-helper-smoky.vercel.app';

    // Fetch available styles and marks
    async function fetchStylesAndMarks() {
        try {
            const response = await fetch(`${API_URL}/api/styles`);
            if (!response.ok) {
                throw new Error('Failed to fetch styles');
            }
            const data = await response.json();
            availableStyles = data.styles;
            availableMarks = data.marks;
            
            renderStyleButtons();
            renderMarkCheckboxes();
            
            // Initial styling
            updateStyledText();
        } catch (error) {
            console.error('Error loading styles:', error);
            styleButtons.innerHTML = '<div class="error">Error loading styles. Please try again later.</div>';
            markCheckboxes.innerHTML = '<div class="error">Error loading marks. Please try again later.</div>';
        }
    }

    // Render style buttons
    function renderStyleButtons() {
        styleButtons.innerHTML = '';
        
        availableStyles.forEach(style => {
            const button = document.createElement('button');
            button.classList.add('style-button');
            if (style === selectedStyle) {
                button.classList.add('active');
            }
            button.textContent = style.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            button.addEventListener('click', () => {
                document.querySelectorAll('.style-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                selectedStyle = style;
                updateStyledText();
            });
            
            styleButtons.appendChild(button);
        });
    }

    // Render mark checkboxes
    function renderMarkCheckboxes() {
        markCheckboxes.innerHTML = '';
        
        Object.entries(availableMarks).forEach(([key, name]) => {
            const label = document.createElement('label');
            label.classList.add('mark-checkbox');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = key;
            checkbox.checked = selectedMarks.includes(key);
            
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    selectedMarks.push(key);
                } else {
                    selectedMarks = selectedMarks.filter(mark => mark !== key);
                }
                updateStyledText();
            });
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())));
            
            markCheckboxes.appendChild(label);
        });
    }

    // Update styled text based on selection
    async function updateStyledText() {
        const text = inputText.value;
        if (!text) {
            outputText.textContent = '';
            return;
        }
        
        try {
            const response = await fetch(`${API_URL}/api/style`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: text,
                    style: selectedStyle,
                    marks: selectedMarks
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to style text');
            }
            
            const data = await response.json();
            outputText.textContent = data.styled;
        } catch (error) {
            console.error('Error styling text:', error);
            outputText.textContent = 'Error styling text. Please try again.';
        }
    }

    // Copy to clipboard functionality
    copyButton.addEventListener('click', () => {
        const textToCopy = outputText.textContent;
        
        if (!textToCopy) return;
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                copyNotification.classList.add('visible');
                setTimeout(() => {
                    copyNotification.classList.remove('visible');
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text:', err);
            });
    });

    // Update styled text when input changes (with debounce)
    let debounceTimer;
    inputText.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            updateStyledText();
        }, 300);
    });

    // Initialize
    fetchStylesAndMarks();
});