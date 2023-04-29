<template>
    <div class="card-designer">
        <div class="card-preview" :style="{ backgroundColor: selectedColor }">
            <div class="card-header">
                <h1 class="card-title">{{ selectedQuotation }}</h1>
                <h2 class="card-subtitle">Eid Mubarak!</h2>
            </div>
            <div class="card-body">
                <p class="card-message">Dear {{ toName }},</p>
                <p class="card-message">
                    Wishing you a joyous and blessed Eid filled with happiness, peace and prosperity.
                </p>
                <p class="card-message">Best Regards,</p>
                <p class="card-message">{{ fromName }}</p>
            </div>
            <div class="card-footer">
                <p class="card-signature">Designed with love by [Your Name]</p>
            </div>
        </div>
        <div class="card-controls">
            <div class="color-picker">
                <h3 class="color-picker__title">Color Palette</h3>
                <div class="color-swatches">
                    <div v-for="color in colorPalette" :key="color" class="color-swatch" :style="{ backgroundColor: color }"
                        @click="selectColor(color)"></div>
                </div>
            </div>
            <div class="quotation-picker">
                <h3 class="quotation-picker__title">Quotations</h3>
                <div class="quotation-items">
                    <div v-for="quotation in quotations" :key="quotation" class="quotation-item"
                        :class="{ selected: quotation === selectedQuotation }" @click="selectQuotation(quotation)">{{
                            quotation }}</div>
                </div>
            </div>
            <div class="name-inputs">
                <h3 class="name-inputs__title">To and From</h3>
                <div class="input-group">
                    <label for="fromName" class="input-label">From:</label>
                    <input type="text" id="fromName" v-model="fromName" class="input-field">
                </div>
                <div class="input-group">
                    <label for="toName" class="input-label">To:</label>
                    <input type="text" id="toName" v-model="toName" class="input-field">
                </div>
            </div>
            <div class="save-and-share">
                <button @click="saveCardAsImage" class="save-button">Save as Image</button>
                <social-sharing network="whatsapp" :url="null" :title="null" :description="null" class="social-sharing">
                    <button class="share-button">Share via WhatsApp</button>
                </social-sharing>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import html2canvas from 'html2canvas';
import SocialSharing from 'vue-social-sharing';
const colorPalette = ['#FFE5B4', '#F8DE7E', '#90EE90', '#ADD8E6', '#F0E68C'];
const quotations = ['May the magic of this Eid bring lots of happiness in your life', 'May this Eid bring you lots of joy and prosperity', 'Wishing you a happy and blessed Eid'];
const selectedColor = ref(colorPalette[0]);
const selectColor = (color) => selectedColor.value = color;
const selectedQuotation = ref(quotations[0]);
const selectQuotation = (quotation) => selectedQuotation.value = quotation;
const fromName = ref('');
const toName = ref('');
const saveCardAsImage = () => {
    const cardPreview = document.querySelector('.card-preview');
    html2canvas(cardPreview).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'eid-card.png';
        link.href = image;
        link.click();
    });
}
</script>
<style scoped>
.card-designer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
}

.card-preview {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 600px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    font-family: 'Pacifico', cursive;
}

.card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
}

.card-title {
    font-size: 28px;
    text-align: center;
    margin: 0;
}

.card-subtitle {
    font-size: 20px;
    margin: 0;
}

.card-body {
    text-align: justify;
    margin-bottom: 40px;
}

.card-message {
    font-size: 16px;
    margin: 0;
}

.card-footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.card-signature {
    font-size: 12px;
    margin: 0;
}

.card-controls {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
}

.color-picker__title,
.quotation-picker__title,
.name-inputs__title {
    font-size: 18px;
    margin: 0 0 10px;
}

.color-swatches,
.quotation-items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
}

.color-swatch,
.quotation-item {
    width: calc(20% - 10px);
    height: 50px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.quotation-item:hover,
.color-swatch:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.quotation-item.selected {
    background-color: #f8f8f8;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.input-label {
    font-size: 16px;
    margin-bottom: 5px;
}

.input-field {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f8f8f8;
    font-size: 16px;
    margin-bottom: 10px;
}

.input-field:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
}

.button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
}

.button--primary {
    background-color: #4caf50;
    color: #fff;
    margin-left: 10px;
}

.button--secondary {
    background-color: #f44336;
    color: #fff;
}
</style>