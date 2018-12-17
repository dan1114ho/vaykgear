async function getData() {
  const requestBody = new FormData();
  requestBody.append('quotenumber', 158003);
  requestBody.append('coid', 2108);

  const response = await fetch('https://test.vaykgearforvrms.com/wp-content/themes/salient/library/gear/ajax/lookup-reservation.php', {
    method: 'post',
    body: requestBody
  });
  return response.json();
}


async function getModalContent(serviceId) {
  const requestBody = new FormData();
  requestBody.append('id', '2');
  requestBody.append('message', '');
  requestBody.append('contentId', serviceId);
  requestBody.append('contentData', undefined);

  const response = await fetch('https://test.vaykgearforvrms.com/wp-content/themes/salient/library/gear/ajax/modal-content.php', {
    method: 'post',
    body: requestBody
  });
  return response.json();
}

export { getData, getModalContent };
