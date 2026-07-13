import fs from 'fs';
import path from 'path';
import { priceData } from './src/components/PriceComponent/priceData.js';

function generateCSV() {
  let csvContent = '\uFEFFКатегория;Наименование работ;Ед. измерения;Цена от, руб\n';

  Object.keys(priceData).forEach(category => {
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
    
    priceData[category].forEach(row => {
      const name = row.name.replace(/"/g, '""');
      csvContent += `"${formattedCategory}";"${name}";"${row.unit}";${row.price}\n`;
    });
  });

  const dirPath = path.join(process.cwd(), 'public', 'files');
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(path.join(dirPath, 'price-list.csv'), csvContent, 'utf-8');
  console.log('✅ Файл price-list.csv успешно сгенерирован в public/files/');
}

generateCSV();