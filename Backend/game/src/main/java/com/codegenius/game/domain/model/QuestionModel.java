package com.codegenius.game.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

/**
 * Entity class representing question-related information for a user stored in the database.
 *
 * @author hidek
 * @since 2023-10-08
 */
@Entity
@Table(name = "question")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionModel {
    @Id
    @GeneratedValue(generator = "uuid")
    @Column(name = "id_hearts", length = 16, columnDefinition = "uuid")
    private UUID id;
}
