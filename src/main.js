import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.form');
  const loadingMessage = document.querySelector('.loader');
  const errorMessage = document.querySelector('.error-message');

  if (!searchForm) return;

  searchForm.addEventListener('submit', handleSearch);

  async function handleSearch(event) {
    event.preventDefault();

    const searchQuery = event.target.elements.searchQuery.value.trim();

    if (!searchQuery) {
      showError('Please enter a search term');
      return;
    }

    showLoading();
    clearGallery();
    hideError();

    try {
      const data = await getImagesByQuery(searchQuery);

      if (data.hits.length === 0) {
        showToastError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        createGallery(data.hits);
      }
    } catch (error) {
      showToastError('Something went wrong. Please try again later.');
      showError('Something went wrong. Please try again later.');
      console.error('Error:', error);
    } finally {
      hideLoading();
    }
  }

  function showLoading() {
    loadingMessage.classList.add('visible');
  }

  function hideLoading() {
    loadingMessage.classList.remove('visible');
  }

  function showToastError(message) {
    iziToast.error({
      title: 'Error',
      message: message,
      position: 'topRight',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#EF4040',
      progressBarColor: '#FFBEBE',
      close: true,
      closeOnClick: true,
      timeout: 5000,
    });
  }

  function showError(message) {
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    }
  }

  function hideError() {
    if (errorMessage) errorMessage.style.display = 'none';
  }
});
