const colorList = [
    'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 
    'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 
    'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 
    'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 
    'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 
    'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 
    'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 
    'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 
    'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 
    'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 
    'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 
    'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 
    'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 
    'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 
    'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 
    'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 
    'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 
    'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 
    'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 
    'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 
    'WhiteSmoke', 'Yellow', 'YellowGreen'
];

let chosenColors = [];
        let correctColor = '';

        function initializeGame() {
            const colorGrid = document.getElementById('color-list');
            colorGrid.innerHTML = '';
            chosenColors = [];

            while (chosenColors.length < 10) {
                const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
                if (!chosenColors.includes(randomColor)) {
                    chosenColors.push(randomColor);
                }
            }

            correctColor = chosenColors[Math.floor(Math.random() * chosenColors.length)];

            chosenColors.forEach(color => {
                const span = document.createElement('span');
                span.className = 'color-name';
                span.textContent = color;
                colorGrid.appendChild(span);
            });

            document.getElementById('message').textContent = 'Tente adivinhar uma das cores!';
            document.getElementById('color-input').value = '';
            document.body.style.backgroundColor = '';
        }

        function guessColor() {
            const input = document.getElementById('color-input').value.trim().toLowerCase();
            const message = document.getElementById('message');

            if (!chosenColors.map(color => color.toLowerCase()).includes(input)) {
                message.textContent = 'Essa cor não está entre as opções. Tente novamente!';
                message.style.color = 'red';
            } else if (input === correctColor.toLowerCase()) {
                message.textContent = 'Parabéns! Você acertou!';
                message.style.color = 'green';
                document.body.style.backgroundColor = correctColor;
                console.log('Cor correta selecionada:', correctColor);
            } else {
                if (input.localeCompare(correctColor.toLowerCase()) < 0) {
                    message.textContent = 'A cor correta vem *depois* de "' + input + '" na ordem alfabética.';
                } else {
                    message.textContent = 'A cor correta vem *antes* de "' + input + '" na ordem alfabética.';
                }
                message.style.color = 'orange';
            }
        }
        

        initializeGame();