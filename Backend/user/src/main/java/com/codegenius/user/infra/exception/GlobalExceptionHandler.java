package com.codegenius.user.infra.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Global exception handler to handle and customize exception responses.
 *
 * @author hidek
 * @since 2023-08-09
 */
@RestControllerAdvice
public class GlobalExceptionHandler {
    /**
     * Custom exception class for resource not found situations.
     *
     * @author hidek
     * @since 2023-08-09
     */
    public static class NotFoundException extends RuntimeException {
        public NotFoundException(String message) {
            super(message);
        }
    }

    /**
     * Custom exception class for bad request situations.
     *
     * @author hidek
     * @since 2023-08-09
     */
    public static class BadRequestException extends RuntimeException {
        public BadRequestException(String message){
            super(message);
        }
    }

    /**
     * Handles general exceptions and returns an internal server error response.
     *
     * @param e The exception that occurred.
     * @return An ResponseEntity with an internal server error status and message.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An internal server error occurred");
    }

    /**
     * Handles NotFoundException and returns a not found response.
     *
     * @param e The NotFoundException that occurred.
     * @return An ResponseEntity with a not found status and the exception message.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> handleNotFoundException(NotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

    /**
     * Handles BadRequestException and returns a bad request response.
     *
     * @param e The BadRequestException that occurred.
     * @return An ResponseEntity with a bad request status and the exception message.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<String> handleBadRequestException(BadRequestException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

}
