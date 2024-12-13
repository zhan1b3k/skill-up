import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skill-up';
  faqs = [
    {
      question: 'Как разместить курс на платформе?',
      answer: 'Зарегистрируйтесь как преподаватель, создав учетную запись.Заполните профиль, указав информацию о себе и своих квалификациях.Перейдите в раздел "Мои курсы" и нажмите на кнопку "Добавить курс".',
      isOpen: false
    },
    {
      question: 'Есть ли комиссия за размещение курсов?',
      answer: 'Да, платформа взимает комиссию за размещение платных курсов. Комиссия составляет 10% от каждой продажи. Бесплатные курсы размещаются без комиссии. Подробности о размере комиссии можно найти в разделе "Условия сотрудничества".',
      isOpen: false
    },
    {
      question: 'Какие форматы курсов поддерживаются?',
      answer: 'Платформа поддерживает следующие форматы:Видео (MP4, AVI, MOV)Презентации (PDF, PPTX) Текстовые материалы (DOCX, PDF, TXT)Задания и тесты (интерактивные формы) Дополнительные ресурсы (файлы для скачивания, ссылки)',
      isOpen: false
    },
    {
      question: 'Как продвигать мои курсы на платформе?',
      answer: 'Чтобы увеличить видимость ваших курсов:Создайте привлекательное и информативное описание курса.Добавьте качественное изображение и превью-видео. Установите адекватную цену, соответствующую качеству материала. Просите студентов оставлять отзывы и оценки после прохо',
      isOpen: false
    },
  ];
  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
