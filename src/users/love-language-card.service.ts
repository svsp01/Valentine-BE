import { Injectable } from '@nestjs/common';
import { createCanvas, loadImage } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class LoveLanguageCardService {
  async generateLoveLanguageCard(userId: string): Promise<any> {
    const avatarUrl = './src/assets/Verse.png';
    const name = 'John Doe';
    const age = 25;
    const loveLanguage = 'Words of Affirmation';
    const loveCharacteristics = 'Caring, Supportive, Romantic';
    const superpowers = 'Mind Reading, Time Stopping';
    const quote = 'Love is not just a feeling; it is an art.';


    console.log('Absolute path to avatarUrl:', path.resolve(__dirname, avatarUrl));
    const cardPath = await this.generateCard(avatarUrl, name, age, loveLanguage, loveCharacteristics, superpowers, quote);
    return { loveLanguageCardPath: cardPath };
  }



  async generateCard(avatarUrl: string, name: string, age: number, loveLanguage: string, loveCharacteristics: string, superpowers: string, quote: string): Promise<string> {
    const canvasWidth = 400;
    const canvasHeight = 400;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
  gradient.addColorStop(0, '#000'); // Black
  gradient.addColorStop(1, '#111'); // Dark black
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Blue neon wave lines
  ctx.strokeStyle = '#00f'; // Blue color
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const y = (canvasHeight / 10) * i;
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(
      canvasWidth / 4,
      y + canvasHeight / 20,
      canvasWidth / 2,
      y - canvasHeight / 20,
      canvasWidth,
      y
    );
  }
  ctx.stroke();

  const avatarImage = await loadImage('./src/assets/Verse.png');
  const avatarSize = 80;
  const avatarX = (canvasWidth - avatarSize) / 2;
  const avatarY = 50;
  ctx.shadowColor = '#00f';
  ctx.shadowBlur = 10;
  ctx.drawImage(avatarImage, avatarX, avatarY, avatarSize, avatarSize);

  ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
  ctx.fillStyle = '#fff';
  ctx.font = '16px Arial';

  ctx.fillText('Name: John Doe', 20, 200);

  // Age
  ctx.fillText('Age: 25', 20, 230);

  // Love Language
  ctx.fillText('Love Language: Words of Affirmation', 20, 260);

  // Additional gamified elements
  ctx.fillStyle = '#f39c12'; // Yellow color
  ctx.beginPath();
  ctx.arc(canvasWidth - 40, 40, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px Arial'; // Trendy typography
  ctx.fillText('🔥 Level 10', canvasWidth - 100, 45);


    const outputImagePath = `./src/assets/golden-card-${Date.now()}.png`;



    return new Promise<string>((resolve, reject) => {
      const output = fs.createWriteStream(outputImagePath);
      const stream = canvas.createPNGStream();
      stream.pipe(output);

      output.on('finish', () => {
        console.log(">>>", outputImagePath);

        resolve(outputImagePath);
      });

      output.on('error', (error) => {
        reject(error);
      });
    });

  }



}
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let offsetY = 0;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && i > 0) {
      context.fillText(line, x, y + offsetY);
      line = words[i] + ' ';
      offsetY += lineHeight;
    } else {
      line = testLine;
    }
  }

  context.fillText(line, x, y + offsetY);
}


