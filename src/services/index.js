import ApiProvider from './api-provider/api-provider';
import ApiService from './api-service/api-service';

const BASE_URL = `https://conduit.productionready.io/api`;

const apiProvider = new ApiProvider(BASE_URL);

const apiService = new ApiService(apiProvider);

export default apiService;
