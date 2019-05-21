export default async function fetchUserDetails() {
  const baseUrl = 'http://digital-api-orch.f559998668d74315ac45.westeurope.aksapp.io/';
  const restPATH = 'contact?contactId=';
  const contactId = 5070;

  const fullURL = baseUrl + restPATH + contactId;

  return fetch(fullURL).then(res => res.json());
}
