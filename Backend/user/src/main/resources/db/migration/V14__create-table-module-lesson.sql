CREATE TABLE module_lesson (
    module_lesson_id BINARY(16) PRIMARY KEY,
    lesson_order INT NOT NULL,
    content_description VARCHAR(500),
    course_module_fk BINARY(16)
)