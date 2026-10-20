import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-admin',
  imports: [Header, Sidebar, Content, Footer],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}