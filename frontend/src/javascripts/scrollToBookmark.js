export default function scrollToBookmark(linkId, e){
  e.preventDefault();

  document.getElementById(linkId).scrollIntoView();
}
