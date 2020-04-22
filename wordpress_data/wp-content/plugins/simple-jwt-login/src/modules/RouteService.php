<?php


namespace SimpleJWTLogin\Modules;


use SimpleJWTLogin\ErrorCodes;

class RouteService {
	const LOGIN_ROUTE = 'autologin';
	const REGISTER_ROUTE_OLD = 'register';
	const USER_ROUTE = 'users';

	const METHOD_POST = 'POST';
	const METHOD_GET = 'GET';
	const METHOD_DELETE = 'DELETE';
	const METHOD_PUT = 'PUT';

	/**
	 * @var SimpleJWTLoginService
	 */
	private $jwtService;

	/**
	 * @param SimpleJWTLoginService $jwtService
	 *
	 * @return $this
	 */
	public function withService( SimpleJWTLoginService $jwtService ) {
		$this->jwtService = $jwtService;

		return $this;
	}

	/**
	 * @return array
	 */
	public function getAllRoutes() {
		return [
			[ 'name' => self::LOGIN_ROUTE, 'method' => self::METHOD_GET ],
			[ 'name' => self::REGISTER_ROUTE_OLD, 'method' => self::METHOD_POST ],
			[ 'name' => self::USER_ROUTE, 'method' => self::METHOD_POST ],
			[ 'name' => self::USER_ROUTE, 'method' => self::METHOD_DELETE ],
		];
	}

	/**
	 * @param string $routeName
	 *
	 * @return void|\WP_REST_Response
	 * @throws \Exception
	 */
	public function makeAction( $routeName, $method ) {
		switch ( $routeName ) {
			case self::LOGIN_ROUTE:
				$this->jwtService->doLogin();

				return;
				break;
			case self::USER_ROUTE:
				switch ( $method ) {
					case self::METHOD_POST:
						$this->jwtService->validateRegisterUser();

						return $this->jwtService->createUser();
						break;
					case self::METHOD_DELETE:
						return $this->jwtService->deleteUser();
						break;
					default:
						throw new \Exception( __( 'Invalid method for this route.', 'simple-jwt-login' ),
							ErrorCodes::ERR_INVALID_ROUTE_METHOD );
				}
				break;

			/**
			 * @deprecated 1.5.0 This route should not be used anymore
			 */
			case self::REGISTER_ROUTE_OLD:
				$this->jwtService->validateRegisterUser();

				return $this->jwtService->createUser();
				break;

			default:
				throw new \Exception( __( 'Invalid route name.', 'simple-jwt-login' ),
					ErrorCodes::ERR_INVALID_ROUTE_NAME );
		}
	}

}
